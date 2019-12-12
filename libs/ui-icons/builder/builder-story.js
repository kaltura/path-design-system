/* eslint-disable no-console */
import fse from 'fs-extra';
import yargs from 'yargs';
import path from 'path';
import Mustache from 'mustache';
import Queue from './waterfall/queue';
import util from 'util';
import glob from 'glob';

const globAsync = util.promisify(glob);

/**
 * Return Pascal-Cased icon name.
 *
 * @param {string} iconPath
 * @returns {string} class name
 */
export function getComponentName(iconPath) {
    const matchRegex = /src\/([\d\w]+)\.tsx/;
    if (matchRegex.test(iconPath)) {
        const name = iconPath.match(matchRegex)[1];
        return `${name.charAt(0).toUpperCase()}${name.substring(1)}Icon`;
    }

    return '';
}

/**
 * Return icon names grouped by size (16 and 24 px)
 * @param {Array<string>} iconsPath
 * @param options
 * @return {{icons24: Array<string>, icons16: Array<string>}} icons groups
 */
export function getIconsNames(iconsPath, options) {
    const icons16 = [];
    const icons24 = [];
    iconsPath
        .map(getComponentName)
        .filter(Boolean)
        .forEach(icon => {
            if (icon.includes('16')) {
                icons16.push({ iconName: icon });
            } else if (icon.includes('24')) {
                icons24.push({ iconName: icon });
            }
        });
    return { icons16, icons24 };
}

async function worker({ iconsPaths, options, template }) {
    process.stdout.write('.');

    const { icons16, icons24 } = getIconsNames(iconsPaths, options);
    const fileString = Mustache.render(template, { icons16, icons24 }, {}, ['{{', '}}']);
    const absDestPath = path.join(options.outputDir, 'icons.stories.tsx');

    await fse.writeFile(absDestPath, fileString);
}

async function createMdx(options) {
    const template = await fse.readFile(path.join(__dirname, 'template-story-mdx.mustache'), { encoding: 'utf8' });
    const fileString = Mustache.render(template);
    const absDestPath = path.join(options.outputDir, 'icons.stories.mdx');

    await fse.writeFile(absDestPath, fileString);
}

export async function main(options) {
    try {
        let originalWrite;

        options.glob = options.glob || '**/*.tsx';
        options.innerPath = options.innerPath || '';
        options.disableLog = options.disableLog || false;

        // Disable console.log opt, used for tests
        if (options.disableLog) {
            originalWrite = process.stdout.write;
            process.stdout.write = () => {
            };
        }

        const exists1 = await fse.exists(options.outputDir);
        if (!exists1) {
            await fse.mkdir(options.outputDir);
        }

        const [iconsPaths, template] = await Promise.all([
            globAsync(path.join(options.iconsDir, options.glob)),
            fse.readFile(path.join(__dirname, 'template-story.mustache'), { encoding: 'utf8' }),
        ]);

        const queue = new Queue(
            paths =>
                worker({
                    iconsPaths: paths,
                    options,
                    template,
                }),
            { concurrency: 8 },
        );

        queue.push([iconsPaths]);
        await queue.wait({ empty: true });
        await createMdx(options);

        if (options.disableLog) {
            // bring back stdout
            process.stdout.write = originalWrite;
        }
    } catch (err) {
        console.log(err);
    }
}

if (require.main === module) {
    const argv = yargs
        .usage('Build storybook story for icons components.\nUsage: $0')
        .demand('output-dir')
        .describe('output-dir', 'Directory to output story file')
        .demand('icons-dir')
        .describe('icons-dir', 'Icons directory')
        .describe('glob', 'Glob to match inside of --icons-dir. Default **/*.tsx').argv;
    main(argv);
}
