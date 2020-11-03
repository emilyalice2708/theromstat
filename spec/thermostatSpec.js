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
});