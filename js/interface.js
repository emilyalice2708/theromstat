$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature());
  $('#temp-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.currentTemperature);
  })
})