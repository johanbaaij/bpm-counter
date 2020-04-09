const INTERVAL_THRESHOLD = 1.5;

export default class BpmCounter {
  taps: Array<number>;

  constructor(taps: number[] = []) {
    this.taps = taps;
  }

  reset = () => {
    this.taps = [];
  };

  tap = (ms: number = performance.now()) => {
    if (!this.timeStampChronological(ms) || this.intervalTooLong(ms)) {
      return this.reset();
    }
    this.taps.push(ms);
  };

  get bpm() {
    if (this.intervalAverageInMs) {
      return 60000 / this.intervalAverageInMs;
    }
    return 0;
  }

  intervalTooLong(tapInMs: number) {
    if (this.intervalAverageInMs === 0) return false;
    const lastIntervalInMs = tapInMs - this.lastTapInMs;
    return lastIntervalInMs > this.intervalAverageInMs * INTERVAL_THRESHOLD;
  }

  timeStampChronological(tapInMs: number) {
    if (this.taps.length === 0) return true;
    return this.lastTapInMs < tapInMs;
  }

  get lastTapInMs() {
    if (this.taps.length < 2) {
      return 0;
    }
    return this.taps[this.taps.length - 1];
  }

  get intervalAverageInMs() {
    if (this.taps.length < 2) {
      return 0;
    }
    return this.intervalsInMs.reduce(
      (total: number, amount: number, index: number, array: number[]) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    );
  }

  get intervalsInMs() {
    const intervals = this.taps.map((stamp, index) => {
      const nextStamp = this.taps[index + 1];
      return nextStamp - stamp;
    });
    intervals.pop(); // Last entry is null
    return intervals;
  }
}
