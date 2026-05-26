function onBlueZoneClicked() {
  //already have
  let zoneName = document.getElementById("blue-zone").textContent;
  let message = zoneName + " was clicked";
  //ex-07
  let newElement = document.createElement("div");
  newElement.textContent = message;

 
}

function onYellowZoneClicked() {

  let zoneName = document.getElementById("yellow-zone").textContent;
  let message = zoneName + " was clicked";
  console.log(message);
}

function onRedZoneClicked() {
  let zoneName = document.getElementById("red-zone").textContent;
  let message = zoneName + " was clicked";
  console.log(message);
}
