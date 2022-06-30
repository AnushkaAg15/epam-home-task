// Node.js Training session-2 hometask.
// Problem statement.
// 1. Create a node.js command line program which reads operation(add, subtract, multiply, division) 
//and values as arguments and returns the appropriate output onto console as in below criteria
// a. node app.js --operation addition 1 2 3 4 => 1+2+3+4 = 10
// b. node app.js --operation multiply 1 2 3 4 => 1*2*3*4 = 24
// c. node app.js --operation subtraction 2 1 => 2 - 1 = 1
// d. node app.js --operation division 4 2 => 4/2 = 2
// 2. All the invalid cases need to be handled for all the operations
// 3. Include validations for unsupported operations, number of inputs etc.
// Note: Please note that addition and multiplication takes "n” values for inputs. 
//Subtraction and division takes 2 values for input.

function add (args) {
  let sum = 0;
  for(let i = 3; i<args.length; i++){
    //console.log(Number(args[i]));
    sum += Number(args[i]);
  }
  return sum;
}

function multiply (args) {
  let result = 1;
  for(let i = 3; i<args.length; i++) {
    result *= Number(args[i]);
  }
  return result;
}

function divide(a,b) {
  return a/b;
}

function subtract(a,b) {
  return a-b;
}

function calculator(args) {
  if(args.length<5) {
    throw "There must be atleast 2 arguments";
  }
  if(args[2]=="addition" || args[2]=="subtraction" || args[2]=="multiply" || args[2]=="division"){
    switch(args[2]){
      case "addition":
        console.log(add(args));
        break;
      case "multiply":
        console.log(multiply(args));
        break;
      case "subtraction":
        if(args.length>5){
          throw "It should contain only 2 arguments";
        }else{
          console.log(subtract(args[3],args[4]));
        }
        break;
      case "division":
        if(args.length>5){
          throw "It should contain only 2 arguments";
        }else{
          console.log(divide(args[3],args[4]));
        }
        break;
    }
  }else{
    throw "The first argument should be the operation which is ti be performed."
  }
}

let argument = process.argv;
calculator(argument);
