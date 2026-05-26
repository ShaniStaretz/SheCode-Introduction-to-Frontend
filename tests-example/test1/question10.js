var resultMulti = 0;
var resultSum = 0;
function onMultiTwoClick() {
  resultMulti = document.getElementById("doubleNumber").value * 2;
  alert("the result is:" + resultMulti);
}

function onSumThreeNumbersClick() {
  let num1 = Number(document.getElementById("sum-number1").value);
  let num2 = Number(document.getElementById("sum-number2").value);
  let num3 = Number(document.getElementById("sum-number3").value);

  resultSum = num1 + num2 + num3;
  alert("the result is: " + resultSum);
}

function onSubmitClick() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  alert(
    "Good Job" +
      firstName +
      " " +
      lastName +
      " , the result of multi number by two is " +
      resultMulti +
      ", the result of sum three numbers is: " +
      resultSum,
  );
}
