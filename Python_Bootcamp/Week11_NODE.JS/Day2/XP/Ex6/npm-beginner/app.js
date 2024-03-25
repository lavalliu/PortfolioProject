import chalk from 'chalk';
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); 
const success = chalk.green;


console.log(error('This is an error message'));
console.log(warning('This is a warning message'));
console.log(success('This is a success message'));
