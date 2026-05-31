function onMultiTwoClick() {
  let doubleNumberElement = document.getElementById("doubleNumber");
  let doubleNumberValue = doubleNumberElement.value; //string= text
  let resultMulti = Number(doubleNumberValue) * 2;
  alert("the result is:" + resultMulti);
}

function onSumThreeNumbersClick() {
  let num1 = Number(document.getElementById("sum-number1").value);
  let num2 = Number(document.getElementById("sum-number2").value);
  let num3 = Number(document.getElementById("sum-number3").value);

  let resultSum = num1 + num2 + num3;
  alert("the result is: " + resultSum);
}

function onSubmitClick() {
  //Get the first name and last name values from the input fields
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  //Get the number value from the input field and multiply it by two
  let doubleNumberElement = document.getElementById("doubleNumber");
  let doubleNumberValue = doubleNumberElement.value;
  let resultMulti = Number(doubleNumberValue) * 2;

  //Get the three numbers values from the input fields and sum them
  let num1 = Number(document.getElementById("sum-number1").value);
  let num2 = Number(document.getElementById("sum-number2").value);
  let num3 = Number(document.getElementById("sum-number3").value);

  let resultSum = num1 + num2 + num3;
  let fullMessage =
    "Good Job " +
    firstName +
    " " +
    lastName +
    " , the result of multi number by two is " +
    resultMulti +
    " , the result of sum three numbers is: " +
    resultSum;
  alert(fullMessage);
}
