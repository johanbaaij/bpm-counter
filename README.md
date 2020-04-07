# bpm-counter

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/66364715c34b417f8205eeccf9f5b6ea)](https://app.codacy.com/manual/johanbaaij/bpm-counter?utm_source=github.com&utm_medium=referral&utm_content=johanbaaij/bpm-counter&utm_campaign=Badge_Grade_Settings)

JavaScript library for calculating BPMs.

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
