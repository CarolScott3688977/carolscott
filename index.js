const SunCalc = require('suncalc');
const julian = require('julian');

function getLunarPhase(date) {
    const moonIllumination = SunCalc.getMoonIllumination(date);
    if (moonIllumination.phase < 0.0625) return "New Moon";
    else if (moonIllumination.phase < 0.1875) return "First Quarter";
    else if (moonIllumination.phase < 0.3125) return "Waxing Gibbous";
    else if (moonIllumination.phase < 0.4375) return "Full Moon";
    else if (moonIllumination.phase < 0.5625) return "Waning Gibbous";
    else if (moonIllumination.phase < 0.6875) return "Last Quarter";
    else if (moonIllumination.phase < 0.8125) return "Waning Crescent";
    else return "New Moon";
}

function getLunarDistance(date) {
    const moonCoords = SunCalc.getMoonPosition(date.lat, date.lng, date);
    return moonCoords.altitude;
}

module.exports = { getLunarPhase, getLunarDistance };
