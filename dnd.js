// Global functions

function dragStartHandler(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

/* QUESTION 1 */

//the drop area for the first question
let q1Target = document.getElementById("q1_target");

// drop event handler
q1Target.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");

  if (data == "html") {
    q1Target.style.border = "2px dashed green";
  } else {
    q1Target.style.border = "2px dashed red";
  }

  q1Target.innerText = document.getElementById(data).innerText;
});

// Drag start question 1 event listeners
document.getElementById("java").addEventListener("dragstart", dragStartHandler);
document.getElementById("html").addEventListener("dragstart", dragStartHandler);
document.getElementById("css").addEventListener("dragstart", dragStartHandler);
document.getElementById("js").addEventListener("dragstart", dragStartHandler);
document.getElementById("py").addEventListener("dragstart", dragStartHandler);

/* QUESTION 2 */

// Drag start event listeners
document
  .getElementById("arrow_fn")
  .addEventListener("dragstart", dragStartHandler);
document
  .getElementById("lambda_fn")
  .addEventListener("dragstart", dragStartHandler);
document
  .getElementById("self_call")
  .addEventListener("dragstart", dragStartHandler);

const dropArea1 = document.getElementById("drop_area_1");
const dropArea2 = document.getElementById("drop_area_2");
const dropArea3 = document.getElementById("drop_area_3");

// Anonymous(Lambda) function drop area event listener
dropArea1.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");

  if (data == "lambda_fn") {
    dropArea1.style.border = "4px dashed green";
  } else {
    dropArea1.style.border = "4px dashed red";
  }

  dropArea1.appendChild(document.getElementById(data));
});

// Immediate invoked function drop area event listener
dropArea2.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");

  if (data == "self_call") {
    dropArea2.style.border = "4px dashed green";
  } else {
    dropArea2.style.border = "4px dashed red";
  }

  dropArea2.appendChild(document.getElementById(data));
});

// Arrow function drop area event listener
dropArea3.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");

  if (data == "arrow_fn") {
    dropArea3.style.border = "4px dashed green";
  } else {
    dropArea3.style.border = "4px dashed red";
  }

  dropArea3.appendChild(document.getElementById(data));
});
