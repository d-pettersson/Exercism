const earthYearsToPlanetYears = {
  Earth : 1,
  Mercury : 0.2408467,
  Venus : 0.61519726,
  Mars : 1.8808158,
  Jupiter : 11.862615,
  Saturn : 29.447498,
  Uranus : 84.016846,
  Neptune : 164.79132
};

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  // convert to earth years
  get earthYears() {
    return this.seconds / 31557600;
  }

  // generic function to choose planet and return earth years
  onPlanet(planet) {
    let planetYears = this.earthYears / earthYearsToPlanetYears[planet];
    return parseFloat(planetYears.toFixed(2))
  }

  onEarth() {
    return this.onPlanet('Earth');
  }

  onMercury() {
    return this.onPlanet('Mercury');
  }

  onVenus() {
    return this.onPlanet('Venus');
  }

  onMars() {
    return this.onPlanet('Mars');
  }

  onJupiter() {
    return this.onPlanet('Jupiter');
  }

  onSaturn() {
    return this.onPlanet('Saturn');
  }

  onUranus() {
    return this.onPlanet('Uranus');
  }

  onNeptune() {
    return this.onPlanet('Neptune');
  }
}
