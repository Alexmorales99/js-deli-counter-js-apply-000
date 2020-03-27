//0. create a func `takeANumber = (katzDeliLine, name) => return `welcome message` + name+ # in the line
//1. using .push method add the new customer's name to the line;
//2. create a variable to hold the #the of customer in line, calculated using .length method over the katzDeliLine;
//3. create a variable to hold `welcome note + name + # in the line`;
//4. return the variale with welcome note;

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  let numInLine = katzDeliLine.length;
  let welcomeStr = `Welcome, ${name}. You are number ${numInLine} in line.`;
  return welcomeStr;
}

//0. create a func `nowServing` = (katzDeliLine) => return 1) line[0] and delete it from the line; return 2) the `nobody in line str`;
//1. create a variable to hold the number of people in line;
//1. using if (condition) check if line is empty (using .length method) if so return `nobody in line str`;
//2. else using .shift method delete the first index of the line and return it at the same time;

function nowServing(katzDeliLine) {
  let numOfCustomers = katzDeliLine.length;
  let emptyLineMessage = `There is nobody waiting to be served!`;
  if (numOfCustomers === 0) {
    return emptyLineMessage;
  } else {
    let firstCustomerInLine = katzDeliLine.shift();
    return `Currently serving ${firstCustomerInLine}.`;
  }
}

//0. create a func `currentLine` = (katzDeliLine) => curLine as a str;
//1. using if (conditional) check if curLine is empty(using .length method);
//2. if so return `empty line message`;
//3. else create a variable = `The line is currently: ` to hold the string of the customers in line and to keep adding there all customers from current line;
//4. using for loop iterate over each currentLine index and push the names to the newStr;
//5. before each name push a # of customer using ([index] in curLine + 1);
//6. using .slice method take of last 2 elements of the string (comma and the space) and return it at the same time;

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    let emptyLineMessage = `The line is currently empty.`;
    return emptyLineMessage;
  } else {
    let curLineMessage = `The line is currently: `;
    for (let i = 0; i < katzDeliLine.length; i++) {
      let curNumber = i + 1;
      let curName = katzDeliLine[i];
      curLineMessage += `${curNumber}. ${curName}, `;
    }
    let noCommaNoSpaceStr = curLineMessage.slice(0, -2);
     return noCommaNoSpaceStr;
  }
}


