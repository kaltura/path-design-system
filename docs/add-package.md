### adding new package to ui-kit
* create new directory with the package name
* copy path-theming content to the newly created directory and remove un-necessary files
 * clear CHANGELOG.md file
 * update README.md file
 * update package.json - replace 'name' to be the newly created package
* update global package.json file with new package:
      "@kaltura-react-ui-kits/package-name": "file:packages/package-name"
* update global tsconfig.build.json with new package:
      "@kaltura-react-ui-kits/package-name": \["package-name"\]
* update tsconfig.json with the new package name:
      "@kaltura-react-ui-kits/package-name": \["package-name/src"\]




