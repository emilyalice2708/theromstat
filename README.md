# Theromstat

## The Project
This is a Makers week 6 project, marking the beginning of our introduction to javascript.


### The main branch
The specifications:

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

All of the above were successfully implemented in this main branch, with the addition of a weather feature which allows a user to enter their city and view the local temperature. 

### The sinatra-extension branch
The sinatra-extension branch uses sinatra and the web-app runs with app.rb (full instructions in the sinatra-extension readme. 

## How to use

Clone this repository:
```
git clone https://github.com/emilyalice2708/theromstat
```

- Open index.html to view the web page
- (+) increments temperature by 1
- (-) reduces temperature by 1
- (reset) resets temperature to 20
- (PSM on) turns on power saving mode and reduces maximum temp to 25
- (PSM off) turns off power saving mode and increases maximum temp to 32
- You can enter a city into the text box in the top left corner to view the local temperature

## Running Tests

Open SpecRunner.html to run tests.
