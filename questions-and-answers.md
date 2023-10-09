# Q:1
let greeting;
greetign = {};
console.log(greetign);

- Ans: A: {} 
- Explain: greeting is a defined empty object. and empty obj is a truthy.

# Q:2
function sum(a, b) {
  return a + b;
}
sum(1, "2");

- Ans: C: "12"
- Explain: (string + num) or (num + string), in this state both never add, just only take place besides and print answer in string. 

# Q:3
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);

- Ans: A: ['🍕', '🍫', '🥑', '🍔']
- Explain: here we changed favoriteFood value in info obj. but food array did not changed. so answer is the unchange food array.

# Q:4
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());

- Ans: B: Hi there, undefined
- Explain: here name value is not given or defined.

# Q:5
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);

- Ans: C: 3
- Explain: count will not increase for 0, because 0 is flasy. 
