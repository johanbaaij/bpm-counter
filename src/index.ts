const INTERVAL_THRESHOLD = 1.5;

export class Counter {
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

  timeStampChronological(tapInMs: number) {
    if (this.taps.length === 0) return true;
    return this.lastTapInMs < tapInMs;
  }

  intervalTooLong(tapInMs: number) {
    if (this.intervalAverageInMs === 0) return false;
    const lastIntervalInMs = tapInMs - this.lastTapInMs;
    return lastIntervalInMs > this.intervalAverageInMs * INTERVAL_THRESHOLD;
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

  get bpm() {
    if (this.intervalAverageInMs) {
      return 60000 / this.intervalAverageInMs;
    }
    return 0;
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

export default Counter;
