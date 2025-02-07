// // && ||
// const result1 = false;
// let result2 = true;
// let result3 = "hello";

// function getName(name){
//     return name;
// }
// // console.log(false && getName("John"))
// // console.log(true && "Hello" && "JS" && getName("John") && true)

// console.log(true || "HTML" || "Hello" || true || "JS")

// template literals (string template)
// let name1 = "MT";
// let name2 = "Coding";
// let result = `My name is ${name1} ${name2}`;
// console.log(result)

// ternary operator
// let showFruit = "Orange";

// if (showFruit == "Orange") {
//   console.log("Orange");
// } else if (showFruit) {
//   console.log("Apple");
// } else {
//   console.log("Other");
// }

// // let result = showFruit ? "Apple" : "Other";
// let result = showFruit == "Orange" ? "Orange" : showFruit ? "Apple" : "Other";
// console.log(result);

let showFruit = "Kiwi";

function getName(name) {
  return name;
}
if(showFruit){
    console.log(getName("Apple"))
}else{
    console.log(getName("Other"))
}
