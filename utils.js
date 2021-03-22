const readline = require('readline-sync');
const emoji = require('node-emoji');

exports.getAndCheckUserInput = (question, maxValue = null) => {
  let input = parseInt(readline.question(question));
  if (!Number.isInteger(input)) {
    console.log('You entered a wrong value, should be an integer, exit app');
    process.exit();
  } else if (maxValue && input > maxValue) {
    console.log('the range you choose is not available, exit app');
    process.exit();
  } else {
    return input;
  }
};

const makeArrayOfNbrOfUnit = (nbr, unit) => {
  return [...Array(nbr + 1)].map(() => unit);
  // add one element for info
};

const makeMapOfRowOfSeats = (
  CINEMA_ROWS,
  ROW_IDX,
  USER_WISHED_ROW,
  CINEMA_NBR_OF_SEATS_PER_ROWS,
  USER_NBR_OF_SEATS,
) => {
  let lineOfSeats = makeArrayOfNbrOfUnit(CINEMA_NBR_OF_SEATS_PER_ROWS, '');
  let final = lineOfSeats.map((seat, idx) => {
    if (idx === 0) {
      if (ROW_IDX === CINEMA_ROWS) {
        return 'infos';
      } else {
        return ` row nbr : ${ROW_IDX + 1} |`;
      }
    } else if (ROW_IDX === CINEMA_ROWS) {
      return idx;

      //   console.log('toto');
    } else if (ROW_IDX === USER_WISHED_ROW - 1 && idx <= USER_NBR_OF_SEATS) {
      return `[${emoji.get('x')}]`;
    } else {
      return `[${emoji.get('white_check_mark')}]`;
    }
  });
  return final;
};

exports.makeMapOfCinema = (
  CINEMA_ROWS,
  CINEMA_NBR_OF_SEATS_PER_ROWS,
  USER_NBR_OF_SEATS,
  USER_WISHED_ROW,
) => {
  let cinemaListOfRows = makeArrayOfNbrOfUnit(CINEMA_ROWS, '');
  let mapOfcinema = cinemaListOfRows.map((line, idx) => {
    return makeMapOfRowOfSeats(
      CINEMA_ROWS,
      idx,
      USER_WISHED_ROW,
      CINEMA_NBR_OF_SEATS_PER_ROWS,
      USER_NBR_OF_SEATS,
    );
  });

  return mapOfcinema;
};
