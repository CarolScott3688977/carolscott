# Carolscott

A Node.js module for carolscott calculations.

## Installation

You can install this module via npm: `npm install carolscott`

## Usage
```javascript
const lunarUtils = require('lunar-utils');

// Get the current lunar phase
const phase = lunarUtils.getLunarPhase(new Date());
console.log("Current lunar phase:", phase);

// Get the current lunar distance
const distance = lunarUtils.getLunarDistance({ lat: 51.5074, lng: 0.1278 }); // London's coordinates
console.log("Current lunar distance:", distance);
```