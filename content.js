const AUTOFILL_DATA_FILE = chrome.runtime.getURL('data.json');
const SITES_SELECTOR_MAPPING_FILE = chrome.runtime.getURL('sites.json');

let autofillData = {};
let supportedSites = [];
let selectorMapping = {};

/**
 * Import the data.json file
 */
const dataStream = fetch(AUTOFILL_DATA_FILE)
  .then(response => response.json())
  .catch(e => console.log(`failed to read data.json: ${e}`));

/**
 * Import the sites.json file
 */
const sitesStream = fetch(SITES_SELECTOR_MAPPING_FILE)
  .then(response => response.json())
  .catch(e => console.log(`failed to read sites.json: ${e}`));

/**
 * Wait for all promises to be resolved before we initialize the extension
 */
Promise.all([
  dataStream,
  sitesStream
]).then(responses => {
  autofillData = responses[0];
  supportedSites = responses[1].supportedSites;
  selectorMapping = responses[1].selectorMapping;
  init();
})

/**
 * Initialize the autofill extension
 */
function init() {
  const hostname = window.location.hostname;
  if (supportedSites.includes(hostname)) {
    autofillPage(hostname);
  }
}

/**
 * Find the autofill-able input fields on the page according the hostname
 * @param {String} hostname - hostname of the current window
 */
function autofillPage(hostname) {
  for (let selector in selectorMapping[hostname]) {
    const inputElement = $(selector);
    if (inputElement.length) {
      const inputData = selectorMapping[hostname][selector];
      autofillInput(inputElement, inputData);
    }
  }
}

/**
 * Autofill the input field(s) with the input data
 * @param {jQuery} inputElement - jQuery Object containing the input element(s)
 * @param {String} inputData - data to be autofilled into the input element
 */
function autofillInput(inputElement, inputData) {
  const inputValue = autofillData[inputData];
  inputElement.each(element => {
    inputElement[element].value = inputValue;
  });
}
