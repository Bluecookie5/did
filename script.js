function b1(){
  var name = prompt("what is your name"); var number = prompt ("pick a number between 1 - 10"); 
  var celb = prompt ("pick a celebrity ");
  var loca = prompt ("pick a location");

  var result = "Congratulations " + name + " in " + number + " years you will meet " + celb + " in " + loca;
   
  document.getElementById("resultText") .innerHTML = result;
}
