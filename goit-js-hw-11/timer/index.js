class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this._targetDate = targetDate;
    this.timerRef = document.querySelector(this.selector);
    this.daysRef = document.querySelector('span[data-value="days"]');
    this.hoursRef = document.querySelector('span[data-value="hours"]');
    this.minutesRef = document.querySelector('span[data-value="mins"]');
    this.secondsRef = document.querySelector('span[data-value="secs"]');
  }

  set days(value) {
    this.daysRef.textContent = value;
  }

  set hours(value) {
    this.hoursRef.textContent = value;
  }

  set minutes(value) {
    this.minutesRef.textContent = value;
  }

  set seconds(value) {
    this.secondsRef.textContent = value;
  }

  get targetDate() {
    return this._targetDate;
  }

  setClockface() {
    const updateClockface = () => {
      const pad = value => String(value).padStart(2, '0');
      const time = this.targetDate - Date.now();
      this.days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

      if (time < 0) {
        clearInterval(start);
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';

        console.log(
          '%c Time expired',
          'font-size:20px; text-transform:uppercase; color:red;',
        );
      }
    };
    const start = setInterval(updateClockface, 1000);
  }

  init() {
    this.setClockface();
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 31, 2020 13:00:00'),
});

timer.init();
