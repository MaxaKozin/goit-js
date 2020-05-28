/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
class CountdownTimer {
  constructor({
    selector = '#timer-1',
    targetDate = 'December 31, 2020 24:00:00',
    pastePlace = 'body',
  }) {
    this.selector = selector;
    this.pastePlace = pastePlace;
    this._targetDate = targetDate;
    this._daysRef;
    this._hoursRef;
    this._minutesRef;
    this._secondsRef;
  }

  set days(value) {
    this._daysRef.textContent = value;
  }

  set hours(value) {
    this._hoursRef.textContent = value;
  }

  set minutes(value) {
    this._minutesRef.textContent = value;
  }

  set seconds(value) {
    this._secondsRef.textContent = value;
  }

  get targetDate() {
    return this._targetDate;
  }

  createMarkup() {
    const fieldStyles =
      'display: flex;align-items: center;justify-content: center;flex-direction: column;background-color: #333;color: #eee;height: 60px;width: 60px;border-radius: 10px';
    const valueStyles = 'font-size: 20px; font-weight: bold;';
    const labelStyles = 'font-size: 10px; text-transform: uppercase;';
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.setAttribute('id', this.selector.slice(1));
    timer.style.cssText =
      'display: flex; justify-content: space-between; width: 260px; margin: 0 auto';
    const fieldDays = document.createElement('div');
    fieldDays.classList.add('field');
    const valueDays = document.createElement('span');
    valueDays.classList.add('value');
    valueDays.dataset.value = 'days';
    const labelDays = document.createElement('span');
    labelDays.classList.add('label');
    labelDays.textContent = 'Days';
    labelDays.dataset.value = 'days';
    fieldDays.append(valueDays, labelDays);
    const fieldHours = document.createElement('div');
    fieldHours.classList.add('field');
    const valueHours = document.createElement('span');
    valueHours.classList.add('value');
    valueHours.dataset.value = 'hours';
    const labelHours = document.createElement('span');
    labelHours.classList.add('label');
    labelHours.textContent = 'Hours';
    fieldHours.append(valueHours, labelHours);
    const fieldMinutes = document.createElement('div');
    fieldMinutes.classList.add('field');
    const valueMinutes = document.createElement('span');
    valueMinutes.classList.add('value');
    valueMinutes.dataset.value = 'mins';
    const labelMinutes = document.createElement('span');
    labelMinutes.classList.add('label');
    labelMinutes.textContent = 'Minutes';
    fieldMinutes.append(valueMinutes, labelMinutes);
    const fieldSeconds = document.createElement('div');
    fieldSeconds.classList.add('field');
    const valueSeconds = document.createElement('span');
    valueSeconds.classList.add('value');
    valueSeconds.dataset.value = 'secs';
    const labelSeconds = document.createElement('span');
    labelSeconds.classList.add('label');
    labelSeconds.textContent = 'Seconds';
    fieldSeconds.append(valueSeconds, labelSeconds);
    timer.append(fieldDays, fieldHours, fieldMinutes, fieldSeconds);
    const pastePlace = document.querySelector(this.pastePlace);
    pastePlace.prepend(timer);
    const fields = document.querySelectorAll('.field');
    const values = document.querySelectorAll('.value');
    const labels = document.querySelectorAll('.label');
    fields.forEach(el => {
      el.style.cssText = fieldStyles;
    });
    values.forEach(el => {
      el.style.cssText = valueStyles;
    });
    labels.forEach(el => {
      el.style.cssText = labelStyles;
    });

    this._daysRef = document.querySelector('span[data-value="days"]');
    this._hoursRef = document.querySelector('span[data-value="hours"]');
    this._minutesRef = document.querySelector('span[data-value="mins"]');
    this._secondsRef = document.querySelector('span[data-value="secs"]');
  }

  setClockface() {
    const updateClockface = () => {
      const pad = value => String(value).padStart(2, '0');
      const time = this.targetDate - Date.now();
      console.log(this);
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
    this.createMarkup();
    this.setClockface();
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 31, 2020 24:00:00'),
  pastePlace: 'body',
});

timer.init();
