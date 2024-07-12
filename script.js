function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let defaultname = "pet_";
  // Validation logic goes here
  let finalResult = "pet_";
  // Placeholder for validation result

  let validexpresion = /^pet_[a-z A-Z 0-9]+$/; // Ive learned that if we break this  code down we have this we call it regular expressions.  '/^' = this means we start looking for the following word  which is pet_ after that  we have an array that stipulates  The + means it has to have whatever is in the array whilst the $ means the end of the search

  if (validexpresion.test(input)) {
    result = "Valid Syntex";
  } else {
    result = "Invalid syntex";
  }

  //TEst allows us to check if a permet

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}
