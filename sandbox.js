// alert("Hello World");
//let age = 25; // can be chnaged later on
//const points = 100; // can't be changed

// strings
//let email = "Hassan raza";
/*
let firstName = "Hassan";
let lastName = "Raza";
let fullName = firstName + " " + lastName;
a = fullName[0];
let length = fullName.length;
let upperCase = fullName.toUpperCase(); // toLowerCase
let letter = fullName.indexOf("R");
let result = fullName.slice(0, 5); // give positions in agruments
// let result = fullName.substr(startPosition, how many characters);
let resultN = fullName.replace("n", "w"); // replaces first if multiple characters
let result = email.inculdes('@');

console.log(resultN);
*/

// numbers math operators +,-,*,/,**,%
// ++, --
// NaN - not a number

// tempelate strings

/*
const title = "Best Roads of 2021";
const author = "Hassan";
const likes = 30;

let result = `The blog called ${title} by ${author} has ${likes} likes`;
let html = `
<h2> ${title}</h2>
<p> By ${author}</p>
<span>This blog has ${likes} likes </span>
`;
console.log(html);
*/

// Arrays and objects

/*
let ninjas = ["shaun", "ryu", "chun-li"];
let ages = [20, 30, 35];

//console.log(ninjas.length);

//let result = ninjas.join(","); // joining using delimeter as ,

//let result = ninjas.indexOf("ryu");

// let result = ninjas.concat(ages);

//let result = ninjas.push("Ken"); // returns length after adding one element in array

let result = ninjas.pop(); //poping last element

console.log(result);
*/
//let age = 25
//console.log(age!=25)  console.log(age!='25') // both are same

// strict comparison

//console.log(age===25)  console.log(age==='25') // both are not same

//!== // strcit comparison

// type conversion

/*
let score = "100";
score = Number(score);
console.log(score + 1);
console.log(typeof score);
*/

// for (let i = 0; i < 5; i++)
/*
const names = ["Hassan", "Raza", "Chandio"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
*/
/*
while (i < 5) {
  console.log("in loop ", i);
}
*/

/*
do 
{
    console.log('val of i is', i)
}while(i < 5);
*/

/// follows C++ syntax
/*
const password = "pass";
if (password.length >= 8 && password.includes("@")) {
  console.log("Hassan Raza");
} else if (password.length > 10) {
  console.log("Password is not long enough");
} else {
  console.log("Hassan");
}
*/

// continue and break works same like C++ in loops

// switch statements
/*
const grade = "D";
switch (grade) {
  case "A":
    console.log("You got A");
  case "B":
    console.log("You got B");
  case "D":
    console.log("You got D");
  default:
    console.log("Invalid Grade");
}
/*
function greet() {
  // code block for function
  console.log("Hello there");
}
// function expression
// we store function in varaiable
const speak = function () {
  console.log("good day");
};

/*
the difference b/w function decleration and function expression is that
function declared can be called before its decleration

fun() // it works

function fun ()
{
  console.log('hello')
}
*/

/*
/// just like python we can give default values to arguments
const speak = function (name = "Hassan") {
  console.log(`Heool world ${name}`);
};

// Arrow function

const calArea = (radius) => {
  return 3.14 * radius ** 2;
};

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.lenght; i++) {
    total += products[i] + products * tax;
  }
  return total;
};

// when one parameter

const calAreA = (radius) => {
  return radius;
};
// also can be;
const calcArea = (radius) => radius ** 2 * 3.14;

// call back function
// passing function as argument to another function
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};
myFunc((value) => {
  console.log("Hello Word");
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
people.forEach((person) => {
  console.log(person);
});
*/

//Objects

// object literals

/*

const blogs = [
  { title: "asdhasdhad", likes: 20 },
  { title: "dhasdhaod", likes: 80 },
];

let user = {
  name: "crystal",
  age: 30,
  email: "hraza2000@gmail.com",
  blogs: [
    { title: "asdhasdhad", likes: 20 },
    { title: "dhasdhaod", likes: 80 },
  ],
  login: function () {
    console.log("Hello World");
  },
  logBlogs: function () {
    console.log("this user has written the following blogs: ");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
}; /// a key value pair
// dot notation

user.name; // gives name property
user["name"]; // also gives name property
user.login(); // an object method


This key word does not evoke special object property but rather a global property in arrow
function so we use function key word in object


//Math Object

cosole.log(Math.E);

const area = 7.7;
console.log(Math.round(area));

const random = Math.random();

console.log(Math.round(random * 100));
*/
// permitive types are stored on stach while refernce types like objects are stored in heap
/*
reference type means when we create a object for instance creating an object locates the contents
of objects in meomry and it creates pointer which refernce that object

const blogs = [
  { title: "asdhasdhad", likes: 20 },
  { title: "dhasdhaod", likes: 80 },
];

const blogCopy = blogs

blogCopy['title'] = 'Hassan'


console.log(blogCopy['title'])

console.log(blogs['title'])

// both will be changed

*/
/// Document object model

//const para = document.querySelector("body > h1"); // single element
//console.log(para);
/*
// Grab mulptiple tags

const paraAll = document.querySelectorAll("p");
// we can access parAll as (Group of all <p> tags) basically a list
paraAll[2];

// get an element by ID

const title = document.getElementById("page-title");

// get elements by their class name

const errors = document.getElementsByClassName("error"); // returns HTML collection

// can't use forEach method for this

// get elements by their tag name

const paras = document.getElementsByTagName("p");
*/

/*
const para = document.querySelector("body > h1"); // single element
console.log(para);

para.innerText = "ninjas are awesome!"; // update the context

para.forEach((para) => {
  console.log(para.innerText);
});

const content = document.querySelector(".content");

content.innerHTML = "<h2>This is a new h2</h2>";

const people = ["mario", "hassan", "ali"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
*/

/// Seting attribute

/*

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "www.xyz.com");
link.innerText("Hellllloooooo");
// also

link.setAttribute("style", "color: green");

*/
/*
const title = document.querySelector("h1");

title.setAttribute("style", "margin: 50px;");

console.log(title.style);

title.style.margin = "50px";

title.style.fontSize = "60px";
*/
