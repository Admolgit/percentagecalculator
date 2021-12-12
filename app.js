
// Button variable declaration
const button = document.querySelector('.btn');

// Adding the event listener
button.addEventListener('click', getResult);

// Function declaration for get result
function getResult(e) {
  // Percentage calculator variables
  const numberInput = document.querySelector('.number-input');
  const inputPercentage = document.querySelector('.input-percentage');
  const result = document.querySelector('.result');

  // Calculation Variable 
  const amount = parseFloat(numberInput.value);
  const calculatedPercentage = parseFloat(inputPercentage.value / 100);
  const calculatedResult =  (amount * calculatedPercentage).toFixed(2);
  
  // Checking for input with a conditional statement
  if(numberInput.value !== '' && inputPercentage.value !== '') {
    // Result HTML
    const h1 = document.createElement('h1');
    h1.innerText = calculatedResult;
    result.appendChild(h1);
  } else {
    showErr('Please enter a valid number and percentage');
  }

  // Changing button innner text after getting result
  button.innerText = 'Refresh';
  button.className = 'Refresh';

  // Refresh variable after getting result
  const refresh = document.querySelector('.Refresh');

  // Styling the refresh button
  refresh.style.color = 'white';
  refresh.style.backgroundColor = 'blue';

  // Refresh adding event listener
  refresh.addEventListener('mousedown', reloadPage);

   e.preventDefault();
}

// Refresh function declaration
function reloadPage(e) {
  // Page reload after clicking refresh 
  window.location.reload();

  e.preventDefault();
}

function showErr(error) {
  // Creating a div element
  const resultErr = document.createElement('div');
  const container = document.querySelector('.container');
  const percent = document.querySelector('.percentage-input');

  // Adding class element
  resultErr.className = 'alert';
  
  // Error styling
  resultErr.style.backgroundColor = 'red';

  resultErr.style.color = 'white';

  resultErr.style.marginBottom = '1em';

  resultErr.style.paddingLeft = '3rem'
  
  // Appending to document
  resultErr.appendChild(document.createTextNode(error));

  // Inserting error
  container.insertBefore(resultErr, percent);

  // Setting error timeout
  setTimeout(clearErr, 3000);
}

// Clearing the result error
function clearErr() {
  document.querySelector('.alert').remove();
}