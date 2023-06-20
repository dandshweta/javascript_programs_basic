const age = 19;

// Condition ? 'True Statement' : 'False Statement' -> Boolean value
const isAllowedToVote = age >= 18 ? "Yes" : "No";
// const isAllowedToVote = age >= 18 ? 20 : 0;

console.log("isAllowedToVote: ", isAllowedToVote);

const currentUserStatus = false;
const isAllowed = !currentUserStatus ? "Not Allowed" : "Allowed";
console.log("isAllowed: ", isAllowed);
