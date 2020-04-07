# bpm-counter

[![CI Workflow](https://github.com/johanbaaij/bpm-counter/workflows/CI/badge.svg)](https://github.com/johanbaaij/bpm-counter/actions?query=workflow%3ACI)
[![npm package](https://img.shields.io/npm/v/bpm-counter)](https://www.npmjs.com/package/bpm-counter)
[![MIT License](https://img.shields.io/github/license/johanbaaij/bpm-counter)](https://github.com/johanbaaij/bpm-counter/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/36e3a30a778e8e537aca/maintainability)](https://codeclimate.com/github/johanbaaij/bpm-counter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/36e3a30a778e8e537aca/test_coverage)](https://codeclimate.com/github/johanbaaij/bpm-counter/test_coverage)

JavaScript library for calculating beats per minute.

## Install

```sh
yarn add bpm-counter
```

## Usage

```js
import BpmCounter from 'bpm-counter';
const counter = new BpmCounter();

// Cal the tap method with your touch event
counter.tap();
counter.tap();
counter.tap();
counter.tap();

// Optionally you can pass the timestamp in ms yourself
counter.tap(0);
counter.tap(500);
counter.tap(1000);
counter.tap(1500);

counter.bpm;
// -> 120

// Waiting 1.5 * average interval length will reset the counter. To reset manually simply call reset()
counter.reset();
counter.bpm;
// -> 0
```

## Local Development

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
