# Path Design System Icons Builder

> The concept, design and most of the implementation were taken from [material-ui/material-path-icons repository](https://github.com/mui-org/material-ui/tree/master/packages/material-path-icons).
>
> So Credits and our love are reserved to them!

This tool generates Ant-Design Icon components for a set of svg icons.

## Running the build

The build script downloads and builds the Material Design Icons.

```sh
npm install
npm run src:icons
npm run build
```

## Generated folders

The build script downloads Material Design SVG icons to the `material-design-icons` folder,
generates the appropriate `.js` files in the `build` folder, and creates a `package.json`.

## Advanced usage and Custom builds

`node build.js --help` can be used to display the options available for building.

* `--output-dir` - Directory to output generated components.
* `--svg-dir` - Directory containing the source SVG icons.
* `--inner-path` - "Reach into" subdirs, since libraries like material-design-icons
  use arbitrary build directories to organize icons, e.g. "action/svg/production/".
* `--rename-filter`  - Apply a custom filter to rename the generated icons.
  The default and Material Design filters can be found in `filters/rename`.

