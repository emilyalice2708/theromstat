'use strict';

class Thermostat {
  constructor(){
    this._temperature = 20;
    this._MINIMUM_TEMP = 10;
  };

  currentTemperature(){
    return this._temperature;
  };

  up(increment){
    this._temperature += increment;
  };

  down(increment){
    if(this._temperature - increment < this._MINIMUM_TEMP){
      this._temperature = this._MINIMUM_TEMP;
      return;
    };
    this._temperature -= increment;
  };
};