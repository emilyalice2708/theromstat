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
  })
});