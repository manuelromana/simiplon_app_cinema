const readline = require('readline-sync');
// const emoji = require('node-emoji');

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

exports.makeArrayOfNbrOfUnit = (nbr, unit) => {
  return [...Array(nbr + 1)].map(() => unit);
  // add one element for info
};

// const makeMapOfRowOfSeats = (
//   CINEMA_ROWS,
//   ROW_IDX,
//   CINEMA_NBR_OF_SEATS_PER_ROWS,
//   USER_INPUTS,
// ) => {
//   let lineOfSeats = makeArrayOfNbrOfUnit(CINEMA_NBR_OF_SEATS_PER_ROWS, '');
//   let final = lineOfSeats.map((seat, idx) => {
//     console.dir(USER_INPUTS);

//     if (ROW_IDX === CINEMA_ROWS) {
//       if (idx === 0) {
//         return `seat->`;
//       } else {
//         return `${idx}`.length === 1 ? ` ${idx}  ` : ` ${idx} `;
//       }
//     } else if (idx === 0) {
//       let infosIdx =
//         `${ROW_IDX + 1}`.length === 1
//           ? `row  ${ROW_IDX + 1}`
//           : `row ${ROW_IDX + 1}`;

//       return infosIdx;
//     } else if (
//       USER_INPUTS &&
//       USER_INPUTS[`row-${ROW_IDX + 1}`] &&
//       idx <= USER_INPUTS[`row-${ROW_IDX + 1}`]
//     ) {
//       return `[${emoji.get('star')}]`;
//     } else {
//       return `[${emoji.get('free')}]`;
//     }
//   });
//   return final;
// };

// exports.makeMapOfCinema = (
//   CINEMA_ROWS,
//   CINEMA_NBR_OF_SEATS_PER_ROWS,
//   USER_NBR_OF_SEATS,
//   USER_WISHED_ROW,
//   USER_INPUT,
// ) => {
//   let cinemaListOfRows = makeArrayOfNbrOfUnit(CINEMA_ROWS, '');
//   let mapOfcinema = cinemaListOfRows.map((line, idx) => {
//     return makeMapOfRowOfSeats(
//       CINEMA_ROWS,
//       idx,
//       CINEMA_NBR_OF_SEATS_PER_ROWS,
//       USER_INPUT,
//     );
//   });

//   return mapOfcinema;
// };
