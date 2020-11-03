'use strict';

class Thermostat {
  constructor(){
    this._temperature = 20;
  };

  currentTemperature(){
    return this._temperature;
  };

  up(increment){
    this._temperature += increment;
  }

  down(increment){
    this._temperature -= increment;
  }
};