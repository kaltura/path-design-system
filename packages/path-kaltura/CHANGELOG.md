# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.19.5](https://github.com/kaltura/path-design-system/compare/v3.19.4...v3.19.5) (2020-07-21)


### Bug Fixes

* set rxjs as external dependency ([b6a672b](https://github.com/kaltura/path-design-system/commit/b6a672ba0986aafe8f328ab9af6b09858c6b73cb))





## [3.19.4](https://github.com/kaltura/path-design-system/compare/v3.19.3...v3.19.4) (2020-07-21)


### Bug Fixes

* kaltura player memory leak issues ([#175](https://github.com/kaltura/path-design-system/issues/175)) ([913e9dd](https://github.com/kaltura/path-design-system/commit/913e9dd1cc1e5268c3a650137ad1f306443367e3))





## [3.17.1](https://github.com/kaltura/path-design-system/compare/v3.17.0...v3.17.1) (2020-06-29)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





# [3.17.0](https://github.com/kaltura/path-design-system/compare/v3.16.0...v3.17.0) (2020-06-28)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





# [3.16.0](https://github.com/kaltura/path-design-system/compare/v3.15.0...v3.16.0) (2020-06-28)


### Features

* add player resize events and api to access the player instance ([#164](https://github.com/kaltura/path-design-system/issues/164)) ([d963229](https://github.com/kaltura/path-design-system/commit/d963229e2bacd5c6eb07f1cd74158dc6bcdade60))





# [3.14.0](https://github.com/kaltura/path-design-system/compare/v3.13.0...v3.14.0) (2020-06-24)


### Features

* export first played event PATH-677 ([#161](https://github.com/kaltura/path-design-system/issues/161)) ([b3108fe](https://github.com/kaltura/path-design-system/commit/b3108fef9128001df9f6fdb86658621ba6d4d067))





# [3.8.0](https://github.com/kaltura/path-design-system/compare/v3.7.0...v3.8.0) (2020-06-10)


### Features

* add color picker component with stories PATH-845 ([#147](https://github.com/kaltura/path-design-system/issues/147)) ([584ca6a](https://github.com/kaltura/path-design-system/commit/584ca6a5e7f60e259efc8dd50377a9c0a1725686))





# [3.5.0](https://github.com/kaltura/path-design-system/compare/v3.4.0...v3.5.0) (2020-06-07)


### Features

* **path-kaltura:** allow customizing player config during player setup ([e6231eb](https://github.com/kaltura/path-design-system/commit/e6231eb2f10898d9a4a930b257dcedd39c7880bd))





# [3.2.0](https://github.com/kaltura/path-design-system/compare/v3.1.0...v3.2.0) (2020-06-04)


### Features

* disable kava analytics report in player ([b64e7a0](https://github.com/kaltura/path-design-system/commit/b64e7a0e3f4b52221cad7f5f59521b24a44ec585))





# [3.1.0](https://github.com/kaltura/path-design-system/compare/v3.0.0...v3.1.0) (2020-06-04)


### Features

* adjust player current time to ms ([#145](https://github.com/kaltura/path-design-system/issues/145)) ([d6b23ea](https://github.com/kaltura/path-design-system/commit/d6b23ea780e7a8e49e614bf5df8f1f3f51dcd35b))





# [3.0.0](https://github.com/kaltura/path-design-system/compare/v2.3.0...v3.0.0) (2020-06-01)


### Bug Fixes

* update player currentTime to use milliseconds ([#143](https://github.com/kaltura/path-design-system/issues/143)) ([3db3f22](https://github.com/kaltura/path-design-system/commit/3db3f220834790957e9c05f533d7533016a797fa))


### BREAKING CHANGES

* - player seek is now using milliseconds instead of seconds
- current player time is now returning milliseconds instead of seconds





# [2.1.0](https://github.com/kaltura/path-design-system/compare/v2.0.0...v2.1.0) (2020-05-12)


### Features

* add player current state to player provider PATH-740 ([#135](https://github.com/kaltura/path-design-system/issues/135)) ([a5220b7](https://github.com/kaltura/path-design-system/commit/a5220b7c7be70dad4821e5b3d30c6142ee5fd3f7))





# [2.0.0](https://github.com/kaltura/path-design-system/compare/v1.4.1...v2.0.0) (2020-05-11)


### Features

* add play and pause actions to player provider PATH-740 ([#133](https://github.com/kaltura/path-design-system/issues/133)) ([a0391b6](https://github.com/kaltura/path-design-system/commit/a0391b6fcf19b6c0e57c2b22ed58e4df046ec508))


### BREAKING CHANGES

* changing the seek action arguments in Kaltura Player component





# [1.3.0](https://github.com/kaltura/path-design-system/compare/v1.2.0...v1.3.0) (2020-04-26)


### Features

* export time input, modify onchange event params, add pause option to player seek action ([#122](https://github.com/kaltura/path-design-system/issues/122)) ([534c81c](https://github.com/kaltura/path-design-system/commit/534c81c05e7bb4d11df8b055611390783643acbe))





## [1.0.1](https://github.com/kaltura/path-design-system/compare/v1.0.0...v1.0.1) (2020-04-19)

**Note:** Version bump only for package @kaltura-react-ui-kits/path-kaltura





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
