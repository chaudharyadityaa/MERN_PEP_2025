// array length

const fruits0 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits0.length;
document.getElementById("demo").innerHTML = size;


// array toString

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.toString();

// array at

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2.at(2);

document.getElementById("demo").innerHTML = fruit;

// array join

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits3.join(" * ");

// pop

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits4.pop();
document.getElementById("demo2").innerHTML = fruits4;

// push 

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML = fruits5.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits5;

// shift

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits6.shift();
document.getElementById("demo2").innerHTML = fruits6;

// delete

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML =
"The first fruit is: " + fruits7[0];

delete fruits7[0];

document.getElementById("demo2").innerHTML =
"The first fruit is: " + fruits7[0];

// concat

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren0 = myGirls.concat(myBoys);

document.getElementById("demo").innerHTML = myChildren0;


// merging 3 arrays

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren1 = array1.concat(array2, array3); 

document.getElementById("demo").innerHTML = myChildren1;

// splice

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits8;
let removed = fruits8.splice(2, 2, "Lemon", "Kiwi"); 
document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits8;
document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed;

// slice

const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits9.slice(1);
document.getElementById("demo").innerHTML = fruits9 + "<br><br>" + citrus;