function getInputFildValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inpuValueString = inputField.value;
  const inputFildValue = parseFloat(inpuValueString);
  inputField.value = "";

  return inputFildValue;
}
function getElementValueById(elementID) {
  const inputField = document.getElementById(elementID);
  const inpuValueString = inputField.innerText;
  const inputFildValue = parseFloat(inpuValueString);
  inputField.innerText = "";

  return inputFildValue;
}
function setTextElementValueById(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}
