'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

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
    $('#power-saving-status').text('ON')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.currentUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temp').text(`in ${data.name}: ${data.main.temp} °C`);
    })
  }
});