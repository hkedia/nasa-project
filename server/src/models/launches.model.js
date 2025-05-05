const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('2030-01-01T00:00:00Z'),
  target: 'Kepler-442 b',
  customers: ['NASA', 'ZTM'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
}