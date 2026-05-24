/**
 * Triggers when the user clicks submit button. Opens a pop-up message.
In a later version, the user will be asked to fill their name in an input box,
and the pop-up message will show the user’s name.
 */
function onBlueButtonClick() {
  alert("You have clicked the Button!");
}

function onClickYelloButton() {
  alert(document.getElementById("color-input").value);
}

function onClickRedButton() {
  alert("hello " + document.getElementById("name-input").value + "!!!!");
}

function onClickGreenButton() {
  alert(
    "do sms-method is selected:" + document.getElementById("sms-input").checked,
  );
}
