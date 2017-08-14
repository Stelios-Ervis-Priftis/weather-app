// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
// .options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// API key ba224966e43b499a25d5ac55f7a12e4d

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/ba224966e43b499a25d5ac55f7a12e4d/51.6526714,-0.0961436',
  json: true
}, (error, response, body) => {
  // if (error) {
  //   console.log('Unable to connect to Forecast.io server.');
  // } else if (response.statusCode === 400) {
  //   console.log('Unable to fetch weather');
  // } else if (response.statusCode === 200) {
  //   console.log(JSON.stringify(body.currently.temperature));
  // }
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }
});
