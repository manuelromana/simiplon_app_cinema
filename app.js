const utils = require('./utils');
const emoji = require('node-emoji');

//define you cinema map
let CINEMA_ROWS;
let CINEMA_NBR_OF_SEATS_PER_ROWS;

let userNbrOfSeats = utils.getAndCheckUserInput('how many tickets ? ');
let userWishedRow = utils.getAndCheckUserInput(
  'which row you would like to seat ? ',
  CINEMA_ROWS,
);

let myCinemaMap = utils.makeMapOfCinema(
  (CINEMA_ROWS = 10),
  (CINEMA_NBR_OF_SEATS_PER_ROWS = 7),
  userNbrOfSeats,
  userWishedRow,
);

myCinemaMap.forEach(elt => {
  let output = elt.join(' ');
  console.log(output);
});
console.log('your seat(s)', emoji.get('star'));
console.log('free space', emoji.get('free'));
