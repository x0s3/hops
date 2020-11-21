# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [14.0.0-nightly.3](https://github.com/xing/hops/compare/v14.0.0-nightly.2...v14.0.0-nightly.3) (2020-11-20)

**Note:** Version bump only for package hops-postcss





# [14.0.0-nightly.2](https://github.com/xing/hops/compare/v14.0.0-nightly.1...v14.0.0-nightly.2) (2020-11-13)

**Note:** Version bump only for package hops-postcss





# [14.0.0-nightly.1](https://github.com/xing/hops/compare/v13.0.0...v14.0.0-nightly.1) (2020-11-06)


### Bug Fixes

* update dependency mini-css-extract-plugin to v1 ([45344c4](https://github.com/xing/hops/commit/45344c4708be39bb1f82432aac50ebc8a09dfc25))
* update dependency style-loader to v2 ([0b2d3c9](https://github.com/xing/hops/commit/0b2d3c9c7fc0c18f8e1c266ce8d7e8dfe87d392e))


### Features

* add support for Node v15 ([75d22c8](https://github.com/xing/hops/commit/75d22c88db5beab3fa4f3edf29ccd5c5fb29fd2f))


### BREAKING CHANGES

* the `esModule` option is `true` by default, you need to change `const locals = require('./styles.css')`/`require('./styles.css')` to `import locals from './styles.css'`/`import './styles.css'`
* the `esModule` option is `true` by default, you need to change `const locals = require('./styles.css')`/`require('./styles.css')` to `import locals from './styles.css'`/`import './styles.css'`
