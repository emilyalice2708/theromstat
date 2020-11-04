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
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function(){
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has a mimum temperature of 10', function(){
    for (var i = 0; i < 12; i ++) {
      thermostat.down();
    }
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
      for (var i = 0; i < 6; i ++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(25);
    });
  });

  describe('when power-saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.powerSavingOff();
      for (var i = 0; i < 14; i ++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  it('can be reset to 20 degrees', function(){
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe('when temperature < 18', function(){
    it('returns low-usage', function(){
      for (var i = 0; i < 10; i ++) {
        thermostat.down();
      }
      expect(thermostat.currentUsage()).toEqual('low-usage');
    });
  });

  describe('when temperature > 18 and <= 25', function(){
    it('returns medium-usage', function(){
      expect(thermostat.currentUsage()).toEqual('medium-usage');
    });
  });

  describe('when temperature > 25', function(){
    it('returns high-usage', function(){
      thermostat.powerSavingOff();
      for (var i = 0; i < 6; i ++) {
        thermostat.up();
      }
      expect(thermostat.currentUsage()).toEqual('high-usage');
    });
  });
});