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
  };

  down(increment){
    if(this._temperature - increment < 10){
      this._temperature = 10;
      return;
    };
    this._temperature -= increment;
  };
};