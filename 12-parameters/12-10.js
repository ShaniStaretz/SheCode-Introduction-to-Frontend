function onBlueZoneClicked() {
  //already have
  let zoneName = document.getElementById("blue-zone").textContent;
  let message = zoneName + " was clicked";
  //ex-07
  let newElement = document.createElement("div");

  newElement.textContent = message;
  //ex 10
  newElement.classList.add("message", "blue-message");
  //the new element is ready but not yet added to the page.
  // We need to add it to the body of the page.

  //ex-08
  //1.get element of body
  let bodyElement = document.getElementById("body-content");
  //2.add to body the new element
  bodyElement.appendChild(newElement);
  
  // verify that the class attribute of the new element has both "message" and "blue-message" values
  console.log(
    "classlist with getAttribute function:" + newElement.getAttribute("class"),
  );
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
