/**
 *
 * Step 1   - Check if it's not a valid input
 * Step 2   - If true, return error message
 * Step 3   - Try to convert the string into capitalise
 * Step 4   - Contact the string with the message
 * Step 5   - Return the string
 * @param {String} name
 */
function getGreetings(name = "User") {
  // Step 1
  if (name === null || typeof name !== "string") {
    return "Please enter a valid string"; // Step 2
  } else {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${formattedName}, welcome to the team`;
    //return "Hello " + name + ", welcome to the team";
  }
}

console.log(getGreetings(null));
console.log(getGreetings("cHiRag"));

// Input - cHiRaG -> Chirag
const capitaliseCharacter = (input) => {
  let result = input[0].toUpperCase(); // c -> C

  for (let i = 1; i < input.length; i++) {
    result = result + input[i].toLowerCase();
  }

  return result;
};
