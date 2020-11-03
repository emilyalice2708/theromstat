'use strict';

describe('Feature Test', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });
});