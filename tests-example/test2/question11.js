var resultSquare = 0;
var resultAverage = 0;
function onSquareClick() {
  let squareNumber = document.getElementById("square-number").value;
  resultSquare = squareNumber * squareNumber;
  console.log("the result is:" + resultSquare);
}

function onAverageClick() {
  let num1 = Number(document.getElementById("average-number1").value);
  let num2 = Number(document.getElementById("average-number2").value);
  let num3 = Number(document.getElementById("average-number3").value);

  let sum = num1 + num2 + num3;
  resultAverage = sum / 3;
  console.log("the result is: " + resultAverage);
}

function onSubmitClick() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  console.log(
    "Great Job" +
      firstName +
      " " +
      lastName +
      "! , The square of your number is  " +
      resultSquare +
      ", and the average of your numbers is " +
      resultAverage +
      ".",
  );
}
