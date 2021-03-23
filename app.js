const utils = require('./utils');

const CINEMA_ROWS = 50;
const CINEMA_NBR_OF_SEATS_PER_ROWS = 25;

let userNbrOfSeats = utils.getAndCheckUserInput('how many tickets ? ');
let userWishedRow = utils.getAndCheckUserInput(
  'which row you would like to seat ? ',
  CINEMA_ROWS,
);

let myCinemaMap = utils.makeMapOfCinema(
  CINEMA_ROWS,
  CINEMA_NBR_OF_SEATS_PER_ROWS,
  userNbrOfSeats,
  userWishedRow,
);

myCinemaMap.forEach(elt => {
  let output = elt.join(' ');
  console.log(output);
});
