function onBlueZoneClicked() {
  //already have
  let zoneName = document.getElementById("blue-zone").textContent;
  let message = zoneName + " was clicked";
  //ex-07
  let newElement = document.createElement("div");

  newElement.textContent = message;
  //ex 10- using getAttribute function to get the value of the class attribute of the parent element 
  // that we already have in the first line
  // and add it to the new element.
  let parentClass = zoneName.getAttribute("class");
  newElement.classList.add("message", parentClass);
  //the new element is ready but not yet added to the page.
  // We need to add it to the body of the page.

  //ex-08
  //1.get element of body
  let bodyElement = document.getElementById("body-content");
  //2.add to body the new element
  bodyElement.appendChild(newElement);

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
