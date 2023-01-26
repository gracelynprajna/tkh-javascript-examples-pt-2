const { program } = require("commander");

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);

const options = program.opts();

console.log(options);

console.log(`Your pizza is ${options.pizzaType} and the size is ${options.size}.`);

// if(options.small){
//   console.log(`Your pizza is ${options.pizzaType} and the size is small.`);
// }else {
//   console.log(`Your pizza is ${options.pizzaType} and the size is large.`)
// }