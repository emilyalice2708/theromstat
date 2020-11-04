'use strict';

class Thermostat {
  constructor(){
    this._temperature = 20;
    this._MIN_TEMP = 10;
    this._powerSaving = true;
  };

  currentTemperature(){
    return this._temperature;
  };

  up(){
    if (this._temperature === this.currentMaximumTemperature()){
      return;
    };
    this._temperature += 1;
  };

  down(){
    if (this._temperature === this._MIN_TEMP){
      return;
    };
    this._temperature -= 1;
  };

  isPowerSaving(){
    return this._powerSaving;
  }

  powerSavingOff(){
    this._powerSaving = false;
  }

  powerSavingOn(){
    this._powerSaving = true;
  }

  currentMaximumTemperature(){
    if (this._powerSaving){
      return this.MAX_TEMP = 25;
    }
    else {
      return this.MAX_TEMP = 32;
    }
  }

  reset(){
    this._temperature = 20;
  }

  currentUsage(){
    if (this._temperature < 18){
      return 'low-usage'
    } else if (this._temperature <= 25){
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
};