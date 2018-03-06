function expressionOperator(string) {

  for (char of string ) {
    if (string.includes("+") && !string.includes("-")) {
      let newString = string.replace(/[^\w]/g, "");
      let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
      let realResult = result.reduce((total, num) => total + num);
      return realResult
    } else if (string.includes("-") && !string.includes("+")) {
       let newString = string.replace(/[^\w]/g, "");
       let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
     for (var i = 0; i < result.length; i++){
       if (result.length <= 2) {
         return result[0] - result[1]
       } else if (result.length >= 3) {
          let firstNum = -result[0]
        return firstNum + (result[1] - result[2])
       }
      }
     }
  }
}


expressionOperator("- 1 2 - 5");
// -1
