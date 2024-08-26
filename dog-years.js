function dogYears(planet, age) {
    const orbitalperiods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    }
    const earthsecs = 31557600;
    const ageinearthyears = age / earthsecs;
    const orbitalperiod = orbitalperiods[planet];
    const ageinplanetyears = ageinearthyears / orbitalperiod;
    const ageindogyears = ageinplanetyears * 7
    return ageindogyears.toFixed(2);
}
