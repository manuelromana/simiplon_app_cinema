const utils = require('./utils');
const cinemaMap = require('./CinemaMapping');
const emoji = require('node-emoji');

//define you cinema map
let CINEMA_ROWS = 8;
let CINEMA_NBR_OF_SEATS_PER_ROWS = 9;
let counter = 0;
let userInputs = {};
let userNbrOfSeats = 'empty';

while (userNbrOfSeats !== 0) {
  counter++;
  userNbrOfSeats = utils.getAndCheckUserInput('how many tickets ? ');
  let userWishedRow = utils.getAndCheckUserInput(
    'which row you would like to seat ? ',
    CINEMA_ROWS,
  );

  if (userInputs[`row-${userWishedRow}`]) {
    userInputs[`row-${userWishedRow}`] += userNbrOfSeats;
  } else {
    userInputs = {
      ...userInputs,
      [`row-${userWishedRow}`]: userNbrOfSeats,
    };
  }
  // console.log(userInputs[`row-${userWishedRow}`]);

  let myCinemaMap = cinemaMap.makeMapOfCinema(
    CINEMA_ROWS,
    CINEMA_NBR_OF_SEATS_PER_ROWS,
    userInputs,
  );

  myCinemaMap.forEach(elt => {
    let output = elt.join(' ');
    console.log(output);
  });
  console.log('your seat(s)', emoji.get('star'));
  console.log('free space', emoji.get('free'));
}
