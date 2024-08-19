const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquari",
];

let mDrinks = drinks.filter((drinks) =>{
  return drinks.startsWith("M")
})


console.log(mDrinks)

// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']

// They didnt filter the correctly by not using .startsWith or formatting correctly

/////////////////////////////////////////////////////////////////////
const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];

let newArray = colors.map((color,index) => {
  return{color, index}
});

console.log(newArray)



// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];


// they didnt use color in the .map function and were wrongly returning the object
///////////////////////////////////////////////////////////
const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let newPets = pets.map((pet) => {
  return capitalize(pet);
});

console.log(newPets);
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];

// capitalize isnt a function and when it becomes a function you need to input a string into the function
///////////////////////////////////////////////////////////////

