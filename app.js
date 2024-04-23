let display = document.getElementById('display');

function inPutVal(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '0';
}

function calculateResult() {
  let result;
  try {
    result = eval(display.value);
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      throw new Error('Invalid input');
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
