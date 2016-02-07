//function to clear display
function allClear(val) {
  document.getElementById("display").value = val; //val is an empty string
}

//function to remove or clear value of last button pressed
function clear() {
  
}

//function to get and display value of buttons pressed
function getVal(val) { 
  document.getElementById("display").value += val;  //chain values and operators
}

var result = 0;  //initialize variable to store evaluation results

//function to evaluate or calculate operations in display
function calculate() {
  result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;  //display results
}
 
//answer function stores and retrieves result from last evaluation
function answer() {
  document.getElementById("display").value = result;  //display last evaluated results
}