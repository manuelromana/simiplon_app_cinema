const utils = require('./utils');
const cinemaMap = require('./CinemaMapping');
const emoji = require('node-emoji');

//define you cinema map
let CINEMA_ROWS = 8;
let CINEMA_NBR_OF_SEATS_PER_ROWS = 9;
let WELCOME = 'welcome to SIMPLONTHEATRE\n';
let instructions =
  'help:\nenter value & press enter\nto QUIT leave input empty & press enter\n';
let PROMPT_1 = `${instructions}\nhow many tickets would you like ? : `;
let PROMPT_2 = `${instructions}\nwant to continue ? How many tickets? : `;
let ROW_QUESTION = 'Which row would you like to seat ? : ';
let MESSAGE_TO_MUCH_SEATS_1 = 'this row has no enough seats available';
let MESSAGE_TO_MUCH_SEATS_2 = '\ntwo many tickets for one row';
let counter = 0;
let userInputs = {};

while (counter >= 0) {
  if (counter === 0) {
    console.log('\x1b[32m%s\x1b[0m', WELCOME);
  }
  counter++;
  const userNbrOfSeats = utils.getAndCheckUserInput(
    `${counter === 1 ? PROMPT_1 : PROMPT_2}`,
  );
  let userWishedRow = utils.getAndCheckUserInput(ROW_QUESTION, CINEMA_ROWS);

  if (userInputs[`row-${userWishedRow}`]) {
    if (userInputs[`row-${userWishedRow}`] + userNbrOfSeats <= 9) {
      userInputs[`row-${userWishedRow}`] += userNbrOfSeats;
    } else {
      console.log('\x1b[41m%s\x1b[0m', MESSAGE_TO_MUCH_SEATS_1);
      continue;
    }
  } else {
    if (userNbrOfSeats > 9) {
      console.log('\x1b[41m%s\x1b[0m', MESSAGE_TO_MUCH_SEATS_2);

      continue;
    } else {
      userInputs = {
        ...userInputs,
        [`row-${userWishedRow}`]: userNbrOfSeats,
      };
    }
  }
  let myCinemaMap = cinemaMap.makeMapOfCinema(
    CINEMA_ROWS,
    CINEMA_NBR_OF_SEATS_PER_ROWS,
    userInputs,
  );
  console.log('\nMOVIE THEATER MAP\n');
  myCinemaMap.forEach(elt => {
    let output = elt.join(' ');
    console.log(output);
  });
  console.log(emoji.get('star'), '-> your seat(s)');
  console.log(emoji.get('free'), '-> free space\n');
}
