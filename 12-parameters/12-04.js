function onSubmitButtonClick() {
  let firstName = document.getElementById("firstName").value;

  let lastName = document.getElementById("lastName").value;
  let firstMessage = "your first name is " + firstName + ".";
  let lastMessage = "your last name is " + lastName + ".";

  let fullMessage = firstMessage + "\n" + lastMessage;
  alert(fullMessage);
}
