const {spawnSync} = require('child_process');
const { lstatSync, existsSync, readdirSync } = require('fs');
const { join, resolve } = require('path');


const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const libs = getDirectories(resolve(__dirname, '../libs'));

libs.forEach(libPath => {
  if (!existsSync(resolve(libPath, 'package.json'))) {
    console.log(`library '${libPath}' is not publishable, skip library`);
    return;
  }

  console.log(`npm link library '${libPath}'`);
  spawnSync(
    'npm',
    ['link'],
    {
      stdio: 'inherit',
    cwd: libPath }
  );
});

