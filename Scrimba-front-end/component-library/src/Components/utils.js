/**
 * Validates a value against a list of valid options and provides a default if the value is invalid.
 *
 * @param {string} value - The name of the component.
 * @param {string} value - The value to validate.
 * @param {Array<string>} validOptions - An array of valid options.
 * @param {string} defaultValue - The default value to use if the provided value is invalid.
 * @returns {string} The validated value or the default value if invalid.
 */
function validateValue(componentName, value, validOptions, defaultValue) {
    if (validOptions.includes(value)) {
      return value;
    } else {
      console.warn(`In: ${componentName}, Invalid value: ${value}. Defaulting to "${defaultValue}".`);
      return defaultValue;
    }
  }
  
  
  export { validateValue }