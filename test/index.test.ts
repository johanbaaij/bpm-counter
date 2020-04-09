import BpmCounter from '../src';

describe('BpmCounter', () => {
  // it('tap() increases array length by 1', () => {
  //   const counter = new BpmCounter();
  //   counter.tap();
  //   expect(counter.taps.length).toEqual(1);
  //   counter.tap();
  //   expect(counter.taps.length).toEqual(2);
  // });

  it('reset() resets the taps', () => {
    const counter = new BpmCounter();
    counter.tap(0);
    counter.tap(250);
    counter.tap(500);
    expect(counter.taps.length).toEqual(3);
    counter.reset();
    expect(counter.taps.length).toEqual(0);
  });

  it('calculates the tap intervals', () => {
    const counter = new BpmCounter([300, 400, 500, 600, 700]);
    expect(counter.intervalsInMs.length).toBe(4);
    expect(counter.intervalsInMs).toStrictEqual([100, 100, 100, 100]);
  });

  it('calculates interval average', () => {
    const counter = new BpmCounter([500, 1000, 1500, 2000, 2500]);
    expect(counter.intervalAverageInMs).toBe(500);
  });

  it('calculates BPM', () => {
    const counter = new BpmCounter([0, 500]);
    expect(counter.bpm).toBe(120);
  });

  it('calculates a BPM of 0 for 1 tap', () => {
    const counter = new BpmCounter();
    counter.tap();
    expect(counter.bpm).toBe(0);
  });

  it('intervalTooLong check works', () => {
    const counter = new BpmCounter([500, 1000, 1500, 2000, 2500]);
    expect(counter.intervalTooLong(4500)).toBe(true);
  });

  it('counter resets if intervalTooLong', () => {
    const counter = new BpmCounter([500, 1000, 1500, 2000, 2500]);
    counter.tap(3500);
    expect(counter.bpm).toBe(0);
  });

  it('resets if timestamp is non chronological', () => {
    const counter = new BpmCounter([0, 500, 1000, 1500]);
    counter.tap(250);
    expect(counter.bpm).toBe(0);
  });
});
