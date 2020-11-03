'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases the temperature', function(){
    thermostat.up(4);
    expect(thermostat.currentTemperature()).toEqual(24);
  });

  it('decreases the temperature', function(){
    thermostat.down(6);
    expect(thermostat.currentTemperature()).toEqual(14);
  });

  it('has a mimum temperature of 10', function(){
    thermostat.down(12);
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('is on power-saving mode by default', function(){
    expect(thermostat.isPowerSaving()).toBeTruthy;
  });

  it('can switch power-saving mode off and on', function(){
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSaving()).toBeFalsy;
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSaving()).toBeTruthy;
  });

  describe('when power-saving mode is on', function(){
    it('has a maximum temperature of 25 degrees', function(){
      thermostat.up(25);
      expect(thermostat.currentTemperature()).toEqual(25);
    });
  });

  describe('when power-saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.powerSavingOff();
      thermostat.up(25);
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  it('can be reset to 20 degrees', function(){
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });
});