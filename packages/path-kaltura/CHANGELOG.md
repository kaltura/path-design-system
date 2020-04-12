# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/kaltura/path-design-system/compare/v0.7.0...v1.0.0) (2020-04-12)


### Features

* provide players current playing time and seek abilities ([#116](https://github.com/kaltura/path-design-system/issues/116)) ([8205f72](https://github.com/kaltura/path-design-system/commit/8205f72064c94f2e0771e902092cad79982697cc))


### BREAKING CHANGES

* `KalturaPlayer` component api changed for `OnPlayerLoaded`

Previously
```
 onPlayerLoaded?: (entryId: string) => void;
```

Current
```
onPlayerLoaded?: (data: {entryId: string, playerId: string}) => void;
```





# [0.7.0](https://github.com/kaltura/path-design-system/compare/v0.6.3...v0.7.0) (2020-04-05)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





# [0.6.0](https://github.com/kaltura/path-design-system/compare/v0.5.19...v0.6.0) (2020-03-29)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





## [0.5.10](https://github.com/kaltura/path-design-system/compare/v0.5.9...v0.5.10) (2020-03-15)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





## [0.5.7](https://github.com/kaltura/path-design-system/compare/v0.5.6...v0.5.7) (2020-02-17)


### Bug Fixes

* change serviceUrl configuration name to bundlerUrl ([#72](https://github.com/kaltura/path-design-system/issues/72)) ([ae44386](https://github.com/kaltura/path-design-system/commit/ae44386b444f0b9db1dc19a2d5a5d7865b4e619d))





## [0.5.6](https://github.com/kaltura/path-design-system/compare/v0.5.5...v0.5.6) (2020-02-12)


### Bug Fixes

* handle kaltura player with no provider ([#69](https://github.com/kaltura/path-design-system/issues/69)) ([79fd86e](https://github.com/kaltura/path-design-system/commit/79fd86e58ac455ec272aa8cdc188b5b6ea19ff81))





## [0.5.5](https://github.com/kaltura/path-design-system/compare/v0.5.4...v0.5.5) (2020-02-09)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





## [0.5.4](https://github.com/kaltura/path-design-system/compare/v0.5.3...v0.5.4) (2020-02-09)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





## [0.5.3](https://github.com/kaltura/path-design-system/compare/v0.5.2...v0.5.3) (2020-02-09)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





## [0.5.2](https://github.com/kaltura/path-design-system/compare/v0.5.1...v0.5.2) (2020-02-09)


### Bug Fixes

* export kaltura player css overrides ([c8d5e28](https://github.com/kaltura/path-design-system/commit/c8d5e289eb9be86a9f9b53f07e090e72007ab7e3))





## [0.5.1](https://github.com/kaltura/path-design-system/compare/v0.5.0...v0.5.1) (2020-02-09)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





# [0.5.0](https://github.com/kaltura/path-design-system/compare/v0.3.0...v0.5.0) (2020-02-09)


### Bug Fixes

* **path-kaltura:** add css selectors for rounded corners player ([#62](https://github.com/kaltura/path-design-system/issues/62)) ([b44eb1b](https://github.com/kaltura/path-design-system/commit/b44eb1b72a534c3e4fafbf8c250be8810dd8014c))





## [0.4.1](https://github.com/kaltura/path-design-system/compare/v0.4.0...v0.4.1) (2020-02-09)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





# [0.4.0](https://github.com/kaltura/path-design-system/compare/v0.3.0...v0.4.0) (2020-02-09)


### Bug Fixes

* **path-kaltura:** add css selectors for rounded corners player ([#62](https://github.com/kaltura/path-design-system/issues/62)) ([b44eb1b](https://github.com/kaltura/path-design-system/commit/b44eb1b72a534c3e4fafbf8c250be8810dd8014c))





# [0.3.0](https://github.com/kaltura/path-design-system/compare/v0.2.0...v0.3.0) (2020-02-05)


### Features

* **path-kaltura:** add kaltura player component Path-455 ([#52](https://github.com/kaltura/path-design-system/issues/52)) ([4d353e6](https://github.com/kaltura/path-design-system/commit/4d353e6ed5ea2fa4d2dc0f8e0c94501e2594fdd8))
