const age = 19;

// Condition ? 'True Statement' : 'False Statement' -> Boolean value
const isAllowedToVote = age >= 18 ? "Yes" : "No";

let isAllowedToVoteV2 = "";
if (age >= 18) {
  isAllowedToVoteV2 = "Yes";
} else {
  isAllowedToVoteV2 = "No";
}

console.log("isAllowedToVote: ", isAllowedToVote, isAllowedToVoteV2);

const currentUserStatus = true;
const isAllowed = !currentUserStatus ? "Not Allowed" : "Allowed";

let isAllowedV2 = "";
if (!currentUserStatus) {
  isAllowedV2 = "Not allowed";
} else {
  isAllowedV2 = "Allowed";
}

console.log("isAllowed: ", isAllowed);
