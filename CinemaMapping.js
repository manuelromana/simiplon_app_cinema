const utils = require('./utils');
const seatsMap = require('./SeatsMapping');

exports.makeMapOfCinema = (
  CINEMA_ROWS,
  CINEMA_NBR_OF_SEATS_PER_ROWS,
  USER_INPUT,
) => {
  let cinemaListOfRows = utils.makeArrayOfNbrOfUnit(CINEMA_ROWS, '');
  let mapOfcinema = cinemaListOfRows.map((line, idx) => {
    return seatsMap.makeMapOfRowOfSeats(
      CINEMA_ROWS,
      idx,
      CINEMA_NBR_OF_SEATS_PER_ROWS,
      USER_INPUT,
    );
  });

  return mapOfcinema;
};
