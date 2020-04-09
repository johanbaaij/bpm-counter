# bpm-counter

[![CI Workflow](https://github.com/johanbaaij/bpm-counter/workflows/CI/badge.svg)](https://github.com/johanbaaij/bpm-counter/actions?query=workflow%3ACI)
[![npm package](https://img.shields.io/npm/v/bpm-counter)](https://www.npmjs.com/package/bpm-counter)
[![MIT License](https://img.shields.io/github/license/johanbaaij/bpm-counter)](https://github.com/johanbaaij/bpm-counter/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Maintainability](https://api.codeclimate.com/v1/badges/36e3a30a778e8e537aca/maintainability)](https://codeclimate.com/github/johanbaaij/bpm-counter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/36e3a30a778e8e537aca/test_coverage)](https://codeclimate.com/github/johanbaaij/bpm-counter/test_coverage)

JavaScript library for calculating beats per minute.

:stopwatch: Uses `performance.now()` by default, override with your own timestamps if necessary  
:recycle: Automatically resets when pausing between taps

## Usage

```js
import { Counter } from 'bpm-counter';
const counter = new Counter();
```

Call the `tap()` method with a touch or click event.

```js
counter.tap();
```

Optionally you can pass timestamps in ms.

```js
counter.tap(0);
counter.tap(500);
counter.tap(1000);
counter.tap(1500);
```

Or initialize with an array of timestamps in ms.

```js
const counter = new Counter([0, 500, 1000, 1500]);
```

To read the BPM:

```js
counter.bpm;
```

Waiting 1.5 \* average interval length will reset the counter. To reset manually:

```js
counter.reset();
```

## Installation

```sh
yarn add bpm-counter
```

or

```sh
npm install bpm-counter
```

## Credits

- [TSDX](https://github.com/jaredpalmer/tsdx) – Zero-config CLI for TypeScript package development
