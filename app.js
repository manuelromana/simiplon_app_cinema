// const readline = require('readline');
const emoji = require('node-emoji');
const utils = require('./utils');

const CINEMA_ROWS = 10;
const CINEMA_NBR_OF_SEATS_PER_ROWS = 7;

let userNbrOfSeats = utils.getAndCheckUserInput('how many tickets ? ');
let userWishedRow = utils.getAndCheckUserInput(
  'which row you would like to seat ? ',
  CINEMA_ROWS,
);

console.log(
  utils.makeMapOfCinema(
    CINEMA_ROWS,
    CINEMA_NBR_OF_SEATS_PER_ROWS,
    userNbrOfSeats,
    userWishedRow,
  ),
);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(
//   'How many tickets (enter a number) ? ',
//   function (userNbrOfTickets) {
//     userNbrOfSeat = parseInt(userNbrOfTickets);
//     if (!userNbrOfSeat) {
//       console.log('not a number was entered');
//       rl.close();
//       return;
//     }
//     rl.question(
//       `In which range do you want to seat (choose between 1 and ${CINEMA_LINES}) ? `,
//       function (UserChoosenLine) {
//         userRangeNbr = parseInt(UserChoosenLine);
//         // console.log(userNbrOfSeat, userRangeNbr);
//         if (!userRangeNbr) {
//           console.log('not a number was entered');
//           rl.close();
//           return;
//         }

//         utils.makeArrayOfNbrOfUnit(CINEMA_LINES, '').forEach((elt, idx) => {
//           let lineOfSeats = utils.makeArrayOfNbrOfUnit(
//             CINEMA_NBR_OF_SEATS_PER_LINE,
//             '',
//           );
//           let outputOfLineOfSeats = lineOfSeats.map((elt, index) => {
//             if (idx === userRangeNbr) {
//               return index < userNbrOfSeat
//                 ? `[${emoji.get('x')}]`
//                 : `[${emoji.get('white_check_mark')}]`;
//             } else {
//               return `[${emoji.get('white_check_mark')}]`;
//             }
//           });
//           console.log(`${idx} | ${outputOfLineOfSeats.join(' ')}`);
//         });
//         rl.close();
//       },
//     );
//   },
// );
