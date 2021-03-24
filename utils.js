const readline = require('readline-sync');

exports.getAndCheckUserInput = (question, maxValue = null) => {
  let pureInput = readline.question(question);
  let input = parseInt(pureInput);

  if (pureInput === '') {
    console.log('exit...');
    process.exit();
  } else if (!Number.isInteger(input)) {
    console.log(
      'You entered a wrong value, should be positive integer, exit app',
    );
    process.exit();
  } else if (maxValue && input > maxValue) {
    console.log('the row you choose is not available in this cinema, exit app');
    process.exit();
  } else {
    return input;
  }
};

exports.makeArrayOfNbrOfUnit = (nbr, unit) => {
  return [...Array(nbr + 1)].map(() => unit);
  // add one element for info
};
