'use strict';

class Car {
  static getSpecs({
    maxSpeed = 0,
    speed = 0,
    isOn = false,
    distance = 0,
    price = 0,
  }) {
    console.log({ maxSpeed, speed, isOn, distance, price });
  }

  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
    return this._price;
  }

  turnOn() {
    this.isOn = true;
    return this.isOn;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return this.isOn, this.speed;
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
      return this.speed;
    }
    this.speed = this.maxSpeed;
    return this.speed;
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
      return this.speed;
    }
    this.speed = 0;
    return this.speed;
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
      return this.distance;
    }
    this.distance += 0;
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
