let displayValue = "";

function addToDisplay(value) {
  if (value === ".") {
    const parts = displayValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) {
      return;
    }
  }

  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    if (/\/0(?:$|[^0-9.])/.test(displayValue)) {
      alert("Division by zero is not allowed");
      clearDisplay();
      return;
    }

    let result = eval(displayValue);

    document.getElementById("display").value = result;
    displayValue = result.toString();
  } catch (error) {
    alert("Invalid expression");
    clearDisplay();
  }
}
