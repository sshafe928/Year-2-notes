# Advanced Array Methods

- Manipulating data is highly important
- Master arrays and methods and regex
- Pivotal for websites, databases, and web applications

## Mastering Arrays

### Ternaries
- Like a mini if statement
- Syntax: `{conditional ? truePath : falsePath}`

### Spread Operator
- Syntax: `(...)`
- Will iterate through and add all values from an array-like object
- Spreads the elements (methods and properties) of an array

### Mapping Arrays
- When you have an array with several items that you want to break down, the best way is `.map()`
- `.map()` is an array method that will go through each item and do something
- `.map()` returns a whole new array when it's finished
- Other methods such as `.forEach()` do not create new arrays and instead just modify the existing array

#### Anatomy of `.map()`
- The first part of a `.map()` method is a variable name that will represent each item from your array
- This variable name should be named in the singular form of the array
  - Example: `people` -> `person`, `books` -> `book`
- Next, you can destructure your item if you like. This is not required but makes setup easier
  - Example: `const { name, age, job, shirtColor, drink, pet } = person;`
- Lastly, you need to return the object back to the map
  - Example: `return { ...person, shirtColor: 'tie-dye' }`

### `.forEach()`
- Doesn't return a new array; every modification affects the original array
- You have 3 values to work with: `value` (item), `index` (position), `array` (whole)
- The last export for a `.forEach()` loop is `undefined`, which can mess with return loops
- Instead, you can use a conditional that acts depending on the values returned
- If a list is missing variables, they get the definition of `undefined`. You can handle them by:
  - Counting occurrences
  - Breaking up the array into smaller arrays
  - Printing out every name that starts with an "A"


