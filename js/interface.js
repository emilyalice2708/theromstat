$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
  };
});