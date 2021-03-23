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
  //gestion d'erreur pas complète
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
    if (ROW_IDX === CINEMA_ROWS) {
      if (idx === 0) {
        return `seat->`;
      } else {
        return `${idx}`.length === 1 ? ` ${idx}  ` : ` ${idx} `;
      }
    } else if (idx === 0) {
      let infosIdx =
        `${ROW_IDX + 1}`.length === 1
          ? `row  ${ROW_IDX + 1}`
          : `row ${ROW_IDX + 1}`;

      return infosIdx;
    } else if (ROW_IDX === USER_WISHED_ROW - 1 && idx <= USER_NBR_OF_SEATS) {
      return `[${emoji.get('star')}]`;
    } else {
      return `[${emoji.get('free')}]`;
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
