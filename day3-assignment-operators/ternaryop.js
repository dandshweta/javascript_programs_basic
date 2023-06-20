let age = 17;
const result = age < 18 ? "You can not vote" : "You can vote";
console.log(result);

let ageV2 = 19;
const resultV2 = ageV2 < 18 ? "You can not vote" : "You can vote";
console.log(resultV2);

// Complex statement

const userAge = 17;
const userCity = "Bihar";
const isActive = true;

const resultV3 =
  userAge > 18
    ? userCity === "Bihar"
      ? "You can vote"
      : "You can't vote"
    : "You can't vote";

const resultV4 =
  userAge > 18 && userCity === "Bihar" ? "You can Vote" : "You can't vote";

console.log("V3:", resultV3);
console.log("V3:", resultV4);

if (userAge > 18) {
  if (userCity === "Bihar") {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }
} else {
  console.log("You can't vote");
}
