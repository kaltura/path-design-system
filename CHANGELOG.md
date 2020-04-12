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


### Features

* add film icon ([#113](https://github.com/kaltura/path-design-system/issues/113)) ([4f78862](https://github.com/kaltura/path-design-system/commit/4f78862537edde2f93b6c455cae6e5ad442899a5))





## [0.6.3](https://github.com/kaltura/path-design-system/compare/v0.6.2...v0.6.3) (2020-04-02)

**Note:** Version bump only for package path-design-system





## [0.6.2](https://github.com/kaltura/path-design-system/compare/v0.6.1...v0.6.2) (2020-03-30)


### Bug Fixes

* break whole words if too long PATH-461 ([#105](https://github.com/kaltura/path-design-system/issues/105)) ([8f58f45](https://github.com/kaltura/path-design-system/commit/8f58f4577c95d43c10e5d443d34f7452ae398302))





## [0.6.1](https://github.com/kaltura/path-design-system/compare/v0.6.0...v0.6.1) (2020-03-29)


### Bug Fixes

* center hint text PATH-633 ([#104](https://github.com/kaltura/path-design-system/issues/104)) ([85e3d22](https://github.com/kaltura/path-design-system/commit/85e3d22b45bc92071f8003db98f15c30228915ad))





# [0.6.0](https://github.com/kaltura/path-design-system/compare/v0.5.19...v0.6.0) (2020-03-29)


### Features

* add text area input component ([#103](https://github.com/kaltura/path-design-system/issues/103)) ([6c69133](https://github.com/kaltura/path-design-system/commit/6c6913366e42d4429b56ffb195c0f36b5bdb6d29))





## [0.5.19](https://github.com/kaltura/path-design-system/compare/v0.5.18...v0.5.19) (2020-03-25)


### Bug Fixes

* input border disappearing on zoom out in chrome PATH-459 ([#100](https://github.com/kaltura/path-design-system/issues/100)) ([294c63c](https://github.com/kaltura/path-design-system/commit/294c63c9766f9e3466a6ab6385bf456b3e618ff5))





## [0.5.18](https://github.com/kaltura/path-design-system/compare/v0.5.17...v0.5.18) (2020-03-24)

**Note:** Version bump only for package path-design-system





## [0.5.17](https://github.com/kaltura/path-design-system/compare/v0.5.16...v0.5.17) (2020-03-23)


### Bug Fixes

* update button onClick event API typing ([#91](https://github.com/kaltura/path-design-system/issues/91)) ([4f1d13a](https://github.com/kaltura/path-design-system/commit/4f1d13a07017032dcb8a503d7e06575c55ff1c49))





## [0.5.16](https://github.com/kaltura/path-design-system/compare/v0.5.15...v0.5.16) (2020-03-23)

**Note:** Version bump only for package path-design-system





## [0.5.15](https://github.com/kaltura/path-design-system/compare/v0.5.14...v0.5.15) (2020-03-23)


### Bug Fixes

* change buttons background color from white to transparent ([#98](https://github.com/kaltura/path-design-system/issues/98)) ([73e7387](https://github.com/kaltura/path-design-system/commit/73e7387de1be50f7a8a6a0b01c011bbff3d232fb))





## [0.5.14](https://github.com/kaltura/path-design-system/compare/v0.5.13...v0.5.14) (2020-03-23)


### Bug Fixes

* disable clear input text on disabled input field PATH-507 ([#97](https://github.com/kaltura/path-design-system/issues/97)) ([4602090](https://github.com/kaltura/path-design-system/commit/460209003a4368853b8422fb52022984bd6c2d26))





## [0.5.13](https://github.com/kaltura/path-design-system/compare/v0.5.12...v0.5.13) (2020-03-22)


### Bug Fixes

* text-input hover style PATH-484 ([#95](https://github.com/kaltura/path-design-system/issues/95)) ([591d78d](https://github.com/kaltura/path-design-system/commit/591d78ddaa522c4dfa6141b4b37044867de2cb17))





## [0.5.12](https://github.com/kaltura/path-design-system/compare/v0.5.11...v0.5.12) (2020-03-22)


### Bug Fixes

* disable button in progress state PATH-413 ([#92](https://github.com/kaltura/path-design-system/issues/92)) ([065a29c](https://github.com/kaltura/path-design-system/commit/065a29c15664a007249651aebb454ac5e9e8ba91))





## [0.5.11](https://github.com/kaltura/path-design-system/compare/v0.5.10...v0.5.11) (2020-03-17)


### Bug Fixes

* add word-break for long words PATH-456 ([#90](https://github.com/kaltura/path-design-system/issues/90)) ([673347f](https://github.com/kaltura/path-design-system/commit/673347f933099eff95c62025f7c9521d5ec899c2))





## [0.5.10](https://github.com/kaltura/path-design-system/compare/v0.5.9...v0.5.10) (2020-03-15)

**Note:** Version bump only for package path-design-system





## [0.5.9](https://github.com/kaltura/path-design-system/compare/v0.5.8...v0.5.9) (2020-03-15)


### Bug Fixes

* remove broken svg scaling script ([#89](https://github.com/kaltura/path-design-system/issues/89)) ([6fee1ad](https://github.com/kaltura/path-design-system/commit/6fee1ad4cbec74ddd9d57794d96a0a1638dccc2e))





## [0.5.8](https://github.com/kaltura/path-design-system/compare/v0.5.7...v0.5.8) (2020-02-20)


### Bug Fixes

* fix borderless button style ([#74](https://github.com/kaltura/path-design-system/issues/74)) ([f5590d0](https://github.com/kaltura/path-design-system/commit/f5590d036a9ebd23edb97da5f66f924ab5441f7c))





## [0.5.7](https://github.com/kaltura/path-design-system/compare/v0.5.6...v0.5.7) (2020-02-17)


### Bug Fixes

* change serviceUrl configuration name to bundlerUrl ([#72](https://github.com/kaltura/path-design-system/issues/72)) ([ae44386](https://github.com/kaltura/path-design-system/commit/ae44386b444f0b9db1dc19a2d5a5d7865b4e619d))





## [0.5.6](https://github.com/kaltura/path-design-system/compare/v0.5.5...v0.5.6) (2020-02-12)


### Bug Fixes

* handle kaltura player with no provider ([#69](https://github.com/kaltura/path-design-system/issues/69)) ([79fd86e](https://github.com/kaltura/path-design-system/commit/79fd86e58ac455ec272aa8cdc188b5b6ea19ff81))





## [0.5.5](https://github.com/kaltura/path-design-system/compare/v0.5.4...v0.5.5) (2020-02-09)

**Note:** Version bump only for package path-design-system





## [0.5.4](https://github.com/kaltura/path-design-system/compare/v0.5.3...v0.5.4) (2020-02-09)

**Note:** Version bump only for package path-design-system





## [0.5.3](https://github.com/kaltura/path-design-system/compare/v0.5.2...v0.5.3) (2020-02-09)

**Note:** Version bump only for package path-design-system





## [0.5.2](https://github.com/kaltura/path-design-system/compare/v0.5.1...v0.5.2) (2020-02-09)


### Bug Fixes

* export kaltura player css overrides ([c8d5e28](https://github.com/kaltura/path-design-system/commit/c8d5e289eb9be86a9f9b53f07e090e72007ab7e3))





## [0.5.1](https://github.com/kaltura/path-design-system/compare/v0.5.0...v0.5.1) (2020-02-09)

**Note:** Version bump only for package path-design-system





# [0.5.0](https://github.com/kaltura/path-design-system/compare/v0.3.0...v0.5.0) (2020-02-09)


### Bug Fixes

* **path-kaltura:** add css selectors for rounded corners player ([#62](https://github.com/kaltura/path-design-system/issues/62)) ([b44eb1b](https://github.com/kaltura/path-design-system/commit/b44eb1b72a534c3e4fafbf8c250be8810dd8014c))


### Features

* **path-ui:** add typography type black 12px label ([#63](https://github.com/kaltura/path-design-system/issues/63)) ([bba3e7a](https://github.com/kaltura/path-design-system/commit/bba3e7a301fa84d2216c1cc66ef9f4ff27444b60))





## [0.4.1](https://github.com/kaltura/path-design-system/compare/v0.4.0...v0.4.1) (2020-02-09)

**Note:** Version bump only for package path-design-system





# [0.4.0](https://github.com/kaltura/path-design-system/compare/v0.3.0...v0.4.0) (2020-02-09)


### Bug Fixes

* **path-kaltura:** add css selectors for rounded corners player ([#62](https://github.com/kaltura/path-design-system/issues/62)) ([b44eb1b](https://github.com/kaltura/path-design-system/commit/b44eb1b72a534c3e4fafbf8c250be8810dd8014c))


### Features

* **path-ui:** add typography type black 12px label ([#63](https://github.com/kaltura/path-design-system/issues/63)) ([bba3e7a](https://github.com/kaltura/path-design-system/commit/bba3e7a301fa84d2216c1cc66ef9f4ff27444b60))





# [0.3.0](https://github.com/kaltura/path-design-system/compare/v0.2.0...v0.3.0) (2020-02-05)


### Features

* **path-input:** add tag component  ([#56](https://github.com/kaltura/path-design-system/issues/56)) PATH-486 ([6444d52](https://github.com/kaltura/path-design-system/commit/6444d52a925165c597d8841c37c8a8d0a4014ee8))
* **path-kaltura:** add kaltura player component Path-455 ([#52](https://github.com/kaltura/path-design-system/issues/52)) ([4d353e6](https://github.com/kaltura/path-design-system/commit/4d353e6ed5ea2fa4d2dc0f8e0c94501e2594fdd8))





# [0.2.0](https://github.com/kaltura/path-design-system/compare/v0.1.2...v0.2.0) (2020-01-16)


### Features

* add close, gear, home, image and plus icons ([904c646](https://github.com/kaltura/path-design-system/commit/904c64676d46301ca00bb35d6961fed44417d8df))





## [0.1.2](https://github.com/kaltura/path-design-system/compare/v0.1.1...v0.1.2) (2019-12-25)

**Note:** Version bump only for package path-design-system





## [0.1.1](https://github.com/kaltura/path-design-system/compare/v1.0.0-alpha.1...v0.1.1) (2019-12-25)

**Note:** Version bump only for package path-design-system
