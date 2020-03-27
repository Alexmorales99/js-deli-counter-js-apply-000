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

/*Customer comes in to the Deli. He pulls out a tciket, and the ticket gives a number. How would we change the takeANumber function if we dont want to have a line by their names but by numbers?

//0. create a func `takeANumber` (katzDeliLine) => return a number of the customer
//1. create a variable to hold the counter of customers in global memory;
//2. create a variable katzDeliLine = [] in global memory;
//3. 
