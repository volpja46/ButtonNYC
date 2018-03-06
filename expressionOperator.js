function expressionOperator(string) {

  for (char of string ) {
    // go through expression & see if there is an addition sign
    if (string.includes("+") && !string.includes("-")) {
      // create a new string & take out everything besides the numbers
      let newString = string.replace(/[^\w]/g, "");
      // change the numbers in the string to an array and turn them all into integers
      let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
          // add all the results together for result
      let realResult = result.reduce((total, num) => total + num);
      return realResult
      // go through expression & see if there is a subtraction sign
    } else if (string.includes("-") && !string.includes("+")) {
       let newString = string.replace(/[^\w]/g, "");
       let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
     for (var i = 0; i < result.length; i++){
       // if there are only two numbers & a - sign subtract the first from the second number
       if (result.length <= 2) {
         return result[0] - result[1]
         // if there are more than 3 numbers subtract the first num from the
         // result of subtracting the second & third numbers & return result
       } else if (result.length >= 3) {
          let firstNum = -result[0]
        return firstNum + (result[1] - result[2])
       }
      }
     }
  }
}


// expressionOperator("- 1 2 - 5");/
// -1
