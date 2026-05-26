function onSubmitButtonClick() {
  const meetingType = document.getElementById("meeting-type").value;
  const meetingName = document.getElementById("meeting-name").value;
  const meetingDescription = document.getElementById(
    "meeting-description",
  ).value;
  const startTime = document.getElementById("meeting-start-time").value;
  const endTime = document.getElementById("meeting-end-time").value;
  const fullMessage =
    "A new " +
    meetingType +
    " meeting was created: " +
    meetingName +
    ".\n Description: " +
    meetingDescription +
    "\n The meeting will start at " +
    startTime +
    " and end at " +
    endTime +
    ".";
  console.log(fullMessage);
}
