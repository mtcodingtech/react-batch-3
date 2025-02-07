// let id = 1;
// let productName = "Product 1";
// let rating = 5;

// const product = { id, productName, rating };
// console.log(product.id, product["id"]);

// const product2 = {
//   description: "Product 2 description",
//   ...product
// //   id,
// //   productName,
// //   rating,
// };
// const { description } = product2;
// console.log(description)
// console.log(product2)

const arrayItems = [1, 2, 3, 4, 5, 6];

const [getFirstElement, getSecElement, getThirdElement, ...otherElement] = arrayItems;

console.log("getFirstElement", getFirstElement);
console.log("getSecElement", getSecElement);
console.log("getThirdElement", getThirdElement);
console.log("otherElement", otherElement[0])
