const emoji = require('node-emoji');
const utils = require('./utils');

exports.makeMapOfRowOfSeats = (
  CINEMA_ROWS,
  ROW_IDX,
  CINEMA_NBR_OF_SEATS_PER_ROWS,
  USER_INPUTS,
) => {
  let lineOfSeats = utils.makeArrayOfNbrOfUnit(
    CINEMA_NBR_OF_SEATS_PER_ROWS,
    '',
  );
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
    } else if (
      USER_INPUTS &&
      USER_INPUTS[`row-${ROW_IDX + 1}`] &&
      idx <= USER_INPUTS[`row-${ROW_IDX + 1}`]
    ) {
      return `[${emoji.get('star')}]`;
    } else {
      return `[${emoji.get('free')}]`;
    }
  });
  return final;
};
