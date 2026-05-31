function onSquareClick() {
  let squareNumber = Number(document.getElementById("square-number").value);
  let resultSquare = squareNumber * squareNumber;
  console.log("the result is:" + resultSquare);
}

function onAverageClick() {
  let num1 = Number(document.getElementById("average-number1").value);
  let num2 = Number(document.getElementById("average-number2").value);
  let num3 = Number(document.getElementById("average-number3").value);

  let sum = num1 + num2 + num3;
  let resultAverage = sum / 3;
  console.log("the result is: " + resultAverage);
}

function onSubmitClick() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;

  let squareNumber = Number(document.getElementById("square-number").value);
  let resultSquare = squareNumber * squareNumber;

  let num1 = Number(document.getElementById("average-number1").value);
  let num2 = Number(document.getElementById("average-number2").value);
  let num3 = Number(document.getElementById("average-number3").value);

  let sum = num1 + num2 + num3;
  let resultAverage = sum / 3;
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
