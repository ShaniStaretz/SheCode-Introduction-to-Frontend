function onSubmitButtonClick() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let alertMessage =
    "your first name is " +
    firstName +
    ", and your last name is " +
    lastName +
    ".";
  alert(alertMessage);
}
