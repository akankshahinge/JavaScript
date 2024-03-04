# JavaScript
JS is dynamically typed language, means we dont have to specify its type beforehand and also the same variable can be used to hold different data types.
JS is case sensitive.

script tag can be placed in head or in body section
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
We can place multiple script files by placing multiple script tags

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Data can be displayed in different ways:
1. console.log - writing into the browser console
2. document.write - writing onto HTML output (used only for testing)
3. window.alert - writing into an alert box
5. innerHTML - writing into HTML element

JS does not have any print oject or method. Only exception is window.print(), which prints the contetnt of the page (calls printer)
Example: <button onclick="window.print()">Print this page</button>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Variables in JS:
- use const if value and type is not going to change.
- You can re-declare a var variable but re-declaring let variable will not work.
- when we declare a variable and do not assign value, it will have undefined value. Eg. let car; then car will have undefined value. (only for let. const will give error because const declaration must be initialized )
- If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
Example: 2+3+"5" will give 55
- Variables name can be started with $ or _
- Perfer not to use var because of issue in block and functional scope

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Summary:
1. var - If we declare a variable using var, then we can also declare it again with the same name, and if we want to re-assign its value then we can also do that. A global scope variable.
2. let - If we declare variable using let, then we cannot declare it again with the same name, but we can re-assign its value. Block scope variable. Redeclaring a variable with let, in another block, is allowed.
3. const - Neither we can declare it nor re-assign it. Block scope variable. Const declaration must be initialized.
Exception for const objects: But if we have consta object then in that case we can update key value.
Change the elements of constant array
Change the properties of constant object

But you can not:
Reassign a constant value
Reassign a constant array
Reassign a constant object

Redeclaring a variable with const, in another scope, or in another block, is allowed:
Example:
const x = 2;       // Allowed
{
  const x = 3;   // Allowed
}
{
  const x = 4;   // Allowed
}

var is hoisted ie. we can use it before it is declared and let is not hoisted.
Example: This is OK
carName = "Volvo";
var carName;
Example: This is not OK, will give error
carName = "Saab";
let carName = "Volvo";

Difference between null and undefined:
In null we know that value is not there, empty value, no value and in undefined the variable is defined but its value is not declared.

Rules for variable name:
1. Only letter, digits, underscore and $ are allowed.
2. Only letters, underscore and $ are allowed as first character 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DataTypes:
1. Primitive: Number, BigInt, String, Boolean, Undefined, Null, Symbol
2. Non-primitive: Object (object, arrays, date)

Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.
The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not.
Example:
const name = "W3Schools";
let letter = name.at(2);

String is read only. str[0] = "A" gives no error (but does not work!)
substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

JavaScript will try to convert strings to numbers in all numeric operations
Example:
let x = "100";
let y = "10";
let z = x / y;
output is 10

let x = "100";
let y = "10";
let z = x * y;
output is 1000

In the last example JavaScript uses the + operator to concatenate the strings.
let x = "100";
let y = "10";
let z = x + y;
output is 10010

The replace() method replaces only the first match. If you want to replace all matches, use a regular expression with the /g flag set. (/g is a global match, i for case insensitive)

When adding a number and a string, JavaScript will treat the number as a string.
JavaScript evaluates expressions from left to right. Different sequences can produce different results
Example: let x = 16 + "volvo"
output: 16volvo
Example: let x = 16+4+"volvo"
output: 20volvo
let x = "Volvo" + 16 + 4;
output: Volvo164


NaN (Not a Number)
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
Example: let x = 100 / "Apple";
However, if the string is numeric, the result will be a number:
let x = 100 / "10"; o/p -> 10
NaN is a number: typeof NaN returns number

Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let x =  2 / 0; o/p->infinity
let y = -2 / 0; o/p-> -infinity
Infinity is a number: typeof Infinity returns number.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Operators in JS

1. Comparison operator
Equal to ==
Equal to and also checks dataype (strict) ===
Not Equal to !=
Not Equal to and also checks type !==

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Loops and Strings
- Basic loops: for, while, do while

- Some other loops:

1. for-of loop (for strings and arrays)
Example:
let myString="Javascript"
for(let val of myString){
console.log("val is = ",val)
}

2. for-in loop (for objects)
Example:
let myObject = {
fullName: "Rahul",
age: 26,
address: "xyz",
city: "Pune"
}
for(let key in myObject){
console.log("Key is ",key, " Value is ",myObject[key])
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Strings (strings are immutable, all the changes are in new strings, original string does not change)
- To declare a string we can use single or double quotes
Example:
let str = "Apna College"
let newstr = 'Javascript'
- To get the length we use:
str.length
- Template Literals in JS
A way to have embedded expressions in strings
String Interpolation (adding placeholders)
Example:
let obj ={
objname: "pen",
price: 50}
let output = `The cost of ${obj.objname} is ${obj.price}`
console.log(output)
- Escape Characters (\t,\n)
let output = "Simple\nLanguage"
console.log(output)
console.log(output.length) //It will be consider as 1 character in length
- str.toUpperCase()
- str.toLowerCase()
- str.trim() //removes whitespaces
- str.slice(start, end?) //returns part of string, here end is optional and non-inclusive
- str1.concat(str2)
- str.replace(oldval, newval)
- str.charAt(indx)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Arrays:
- Arrays in JS can be collection of same or different datatypes. But generally we have same datatype.
- Array has typeof object
- Arrays are a special kind of objects, with numbered indexes.
- Adding elements with the high indexes can create undefined holes in the array.
  ```
  Example: const fruits = ["apple", "banana", "grapes"]
           fruits[6] = "Lemon"
           output: apple, banana, grapes, NaN, NaN, NaN, Lemon
  ```
- JavaScript has a built-in array constructor new Array();
  ```
  const points = new Array(40, 100, 1, 5, 25, 10);
  ```
- How to recognize an array: The problem is that the JavaScript operator typeof returns "object"
  1. Use isArray: Array.isArray(fruits);
  2. The instanceof operator returns true if an object is created by a given constructor:
  ```
  const fruits = ["Banana", "Orange", "Apple"];
  fruits instanceof Array;
  ```
- The length property returns the length (size) of an array
  ```
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let size = fruits.length;
  ```
- Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string. This is not possible in JavaScript, because [] is used for accessing both arrays and 
  objects. obj[-1] refers to the value of key -1, not to the last property of the object. The at() method was introduced in ES2022 to solve this problem.
  ```
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fruit = fruits.at(2);  //Apple
  let last = fruits.at(-1);  //Mango
  let first = fruits[0]; //  Banana
  let neg = fruits[-1];  //gives undefined
  ```
- Using delete() leaves undefined holes in the array. Use pop() or shift() instead.
  ```
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  delete fruits[0];
  console.log(fruits[0]) // gives undefined
  ```
- The concat() method does not change the existing arrays. It always returns a new array. Example: const myChildren = arr1.concat(arr2, arr3);
- The copyWithin() method copies array elements to another position in an array
  1. The copyWithin() method overwrites the existing values.
  2. The copyWithin() method does not add items to the array.
  3. The copyWithin() method does not change the length of the array
  ```
  Copy to index 2, the elements from index 0 to 2:
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
  fruits.copyWithin(2, 0, 2);  //Banana, Orange, Banana, Orange, Mango, Kiwi
  Copy to index 2, the elements from index 0:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.copyWithin(2, 0);    //Banana, Orange, Banana, Orange
  ```
- Flattening an array is the process of reducing the dimensionality of an array. Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
  ```
  const myArr = [[1,2],[3,4],[5,6]];
  const newArr = myArr.flat();    //1,2,3,4,5,6
  ```
- The indexOf() method searches an array for an element value and returns its position. Example: let pos = fruits.indexOf("Apple");
- join() and split()
  ```
  const fruits = "Banana,Orange,Apple,Mango";
  let split_fruits = fruits.split(",");  //[["Banana","Orange","Apple","Mango"]]
  const fruits = ["Banana","Orange","Apple","Mango"];
  let join_fruits = fruits.join("*");   //Banana*Orange*Apple*Mango
  ```

- toString() converts array elements to comma separated string
  ```
  const fruits = ["Banana","Orange","Apple","Mango"];
  let convert_fruits = fruits.toString();  //Banana,Orange,Apple,Mango
  ```
  
Array are mutable 
- shift(): delete from start and return
- unshift(): add to start
- push(): adds new element at the end
- pop(): pops last element
- slice(): returns a piece of array, so it gives new array
- splice(): change original array (add, remove, replace)
Syntax: splice(startIdx,delCount,newElement)
Example:
arr = [1,2,3,4,5,6]
arr.splice(2,2,101,102) //arr=[1,2,101,102,5,6]
arr.splice(2,4,101,102,103,104
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Orange", "Apple", "Banana", "Kiwi"]
fruits.splice(0,1)  //Apple,Banana,Kiwi and after this if we do fruits[0] it will give Orange
console.log(fruits[0]) //gives Orange, and not undefined as in the case of delete
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Array Search
1. indexOf():
   The indexOf() method searches an array for an element value and returns its position. Returns -1 if the item is not found. If the item is present more than once, it returns the position of the first 
   occurrence.
   ```
   const fruits = ["Apple", "Orange", "Apple", "Mango"];
   let position = fruits.indexOf("Apple") + 1;
   ```
2. lastIndexOf():
   Returns the position of the last occurrence of the specified element.
   ```
   const fruits = ["Apple", "Orange", "Apple", "Mango"];
   let position = fruits.lastIndexOf("Apple") + 1; //3
   ```
3. includes():
   This allows us to check if an element is present in an array. Array.includes() allows to check for NaN values. Unlike Array.indexOf().
   ```
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.includes("Mango"); // is true
   ```
4. find():
   Returns the value of the first array element that passes a test function. If no values satisfy the testing function, undefined is returned
   ```
   const numbers = [4, 9, 16, 25, 29];
   let first = numbers.find(myFunction);

   function myFunction(value, index, array) {
      return value > 18;
   }
   ```
5. findIndex():
   Returns the index of the first array element that passes a test function. If no elements satisfy the testing function, -1 is returned.
   ```
   const numbers = [4, 9, 16, 25, 29];
   let first = numbers.findIndex(myFunction);
   function myFunction(value, index, array) {
      return value > 18;
   }   //3
   ```
6. findLast():
   Method that will start from the end of an array and return the value of the first element that satisfies a condition.  If no elements satisfy the testing function, undefined is returned.
   ```
   const temp = [27, 28, 30, 40, 42, 35, 30];
   let high = temp.findLast(x => x > 40);   //42
   ```
7. findLastIndex():
   Method finds the index of the last element that satisfies a condition. If no elements satisfy the testing function, -1 is returned.
   ```
   const temp = [27, 28, 30, 40, 42, 35, 30];
   let pos = temp.findLastIndex(x => x > 40); //4
   ```
Array Sort
1. sort():
   The sort() method sorts an array alphabetically. Sorts element in place.
   A function that defines the sort order. The return value should be a number whose sign indicates the relative order of the two elements: negative if a is less than b, positive if a is greater than b, and zero 
   if they are equal. NaN is treated as 0. The function is called with the following arguments,
   a: The first element for comparison. Will never be undefined.
   b: The second element for comparison. Will never be undefined.
   ```
   const fruits = ["Banana", "Orange", "Apple", "Mango"];   
   fruits.sort();     //Apple,Banana, Mango, Orange
   ```
2. reverse():
   The reverse() method reverses the elements in an array. By combining sort() and reverse(), you can sort an array in descending order.
   ```
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.reverse();  //Mango,Apple,Orange,Banana
   ```
3. toSorted():
   Method as a safe way to sort an array without altering the original array.
   ```
   const months = ["Jan", "Feb", "Mar", "Apr"];
   const sorted = months.toSorted();
   ```
4. toReversed():
   Method as a safe way to reverse an array without altering the original array.
   ```
   const months = ["Jan", "Feb", "Mar", "Apr"];
   const reversed = months.toReversed();
   ```
5. Numeric Sort:
   By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than   
   "1". Because of this, the sort() method will produce incorrect result when sorting numbers. We can fix this by using compare function.
   Ascending order
   ```
   const points = [40, 100, 1, 5, 25, 10];
   points.sort(function(a, b){return a - b}); //1,5,10,25,40,100
   ```
   Descending order
   ```
   const points = [40, 100, 1, 5, 25, 10];
   points.sort(function(a, b){return b - a}); //100, 40, 25, 10, 5, 1
   ```
   If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done with the sort order of the two values.
   The compare function compares all the values in the array, two values at a time (a, b). When comparing 40 and 100, the sort() method calls the compare function(40, 100). The function calculates 40 - 100 (a - 
   b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
   Also we can sort objects:
   ```
   const cars = [
   {type:"Volvo", year:2016},
   {type:"Saab", year:2001},
   {type:"BMW", year:2010}
   ];
   cars.sort(function (a,b){return a.year-b.year});
   ```
Array Iteration:
   1. forEach(): The forEach() method calls a function (a callback function) once for each array element.
      Note that the function takes 3 arguments:
      - The item value
      - The item index
      - The array itself
      ```
      const myArray = [1,2,3,4,5,6]
      let txt = "";
      myArray.forEach(myFunc);

      function myFunc(value, index, array){
      txt += value + "<br>"
      }

      document.getElementById("demo").innerHTML = txt;
      ```
   2. every(): The every() method checks if all array values pass a test.
      ```
      const numbers = [45, 4, 9, 16, 25];
      let allOver18 = numbers.every(myFunction);
      
      function myFunction(value, index, array) {
        return value > 18;
      }    //false
      ```
   3. some(): The some() method checks if some array values pass a test.
      ```
      const numbers = [45, 4, 9, 16, 25];
      let someOver18 = numbers.some(myFunction);

      function myFunction(value, index, array) {
        return value > 18;
      }   //true
      ```
   4. Array.from(): method returns an Array object from any object with a length property or any iterable object. Create an Array from a String.
      ```
      Array.from("ABCDEFG");
      ```
   5. key(): Method returns an Array Iterator object with the keys of an array
      ```
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      const keys = fruits.keys(); //0, 1, 2, 3
      ```
   6. entries(): key/value pairs
      ```
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      const f = fruits.entries();
      
      for (let x of f) {
        document.getElementById("demo").innerHTML += x;
      }
      //0,Banana
      //1,Orange
      //2,Apple
      //3,Mango
      ```
   7. with(): with() method as a safe way to update elements in an array without altering the original array.
      ```
      const months = ["Januar", "Februar", "Mar", "April"];
      const myMonths = months.with(2, "March");  //Januar,Februar,March,April
      ```
   8. Spread Opeartor (...)
      The ... operator expands an iterable (like an array) into more elements:
      ```
      const q1 = ["Jan", "Feb", "Mar"];
      const q2 = ["Apr", "May", "Jun"];
      const q3 = ["Jul", "Aug", "Sep"];
      const q4 = ["Oct", "Nov", "May"];
      
      const year = [...q1, ...q2, ...q3, ...q4];  //Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May
      ```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Javascript Date Objects:
```
const d = new Date();
const d = new Date("2022-03-25");
const d = new Date("October 13, 2014 11:13:00");
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
```
By default, JavaScript will use the browser's time zone and display a date as a full text string: Thu Feb 29 2024 13:37:21 GMT+0530 (India Standard Time)
Specifying a month higher than 11, will not result in an error but add the overflow to the next year
Specifying a day higher than max, will not result in an error but add the overflow to the next month
You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const d = new Date(2018); -> Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
Zero time is January 01, 1970 00:00:00 UTC.

Methods:
1. toString(): converted to a string
   ```
   const d = new Date();
   d.toString();
   ```
2. toDateString(): method converts a date to a more readable format
   ```
   const d = new Date();
   d.toDateString();    //Thu Feb 29 2024
   ```
3. toUTCString() method converts a date to a string using the UTC standard
4. toISOString() method converts a date to a string using the ISO standard
5. ISO Dates: Date and time is separated with a capital T. UTC time is defined with a capital letter Z. When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
   When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
   ```
   const d = new Date("2015-03-25T12:00:00Z");
   ```
6. Date.now() returns the number of milliseconds since January 1, 1970.
   ```
   let ms = Date.now();  //1709209014763
   ```
Date Get Methods
This will give local time.

| Methods            | Description                                   |
|--------------------|-----------------------------------------------|
| getFullYear()      | Get year as a four digit number (yyyy)        |
| getMonth()         | Get month as a number (0-11)                  |
| getDay()           | Get weekday as a number (0-6)                 |
| getDate()          | Get day as a number (1-31)                    |
| getHours()         | Get hour (0-23)                               |
| getMinutes()       | Get minute (0-59)                             |
| getSeconds()       | Get second (0-59)                             |
| getMilliseconds()  | Get millisecond (0-999)                       |
| getTime()          | Get time (milliseconds since January 1, 1970) |

In JavaScript, the first day of the week (day 0) is Sunday.

To get UTC time
| Method               | Equivalent Method | Description                 |
|----------------------|-------------------|-----------------------------|
| getUTCDate()         | getDate()         | Returns the UTC date        |
| getUTCFullYear()     | getFullYear()     | Returns the UTC year        |
| getUTCMonth()        | getMonth()        | Returns the UTC month       |
| getUTCDay()          | getDay()          | Returns the UTC day         |
| getUTCHours()        | getHours()        | Returns the UTC hour        |
| getUTCMinutes()      | getMinutes()      | Returns the UTC minutes     |
| getUTCSeconds()      | getSeconds()      | Returns the UTC seconds     |
| getUTCMilliseconds() | getMilliseconds() | Returns the UTC milliseconds|

Date Set Methods
| Method             | Description                                       |
|--------------------|---------------------------------------------------|
| setDate()          | Set the day as a number (1-31)                   |
| setFullYear()      | Set the year (optionally month and day)          |
| setHours()         | Set the hour (0-23)                              |
| setMilliseconds()  | Set the milliseconds (0-999)                     |
| setMinutes()       | Set the minutes (0-59)                           |
| setMonth()         | Set the month (0-11)                             |
| setSeconds()       | Set the seconds (0-59)                           |
| setTime()          | Set the time (milliseconds since January 1, 1970)|

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Math: The JavaScript Math object allows you to perform mathematical tasks on numbers.
Unlike other objects, the Math object has no constructor.
The Math object is static.
All methods and properties can be used without creating a Math object first.
```
Math.PI //3.141592653589793
Math.E
```
Math Methods:
1. Number to integer:
   ```
   Math.round(x)	Returns x rounded to its nearest integer Eg. 4.6 => 5 , 4.5 => 5, 4.4 => 4
   Math.ceil(x)	Returns x rounded up to its nearest integer Eg. 4.4 => 5
   Math.floor(x)	Returns x rounded down to its nearest integer Eg. 4.9 => 4
   Math.trunc(x)	Returns the integer part of x Eg. 4.5 => 4
   ```
2. Math.sign(x) returns if x is positive, negative or null
   ```
   Math.sign(4) => 1
   Math.sign(-4) => -1
   ```
3. Math.pow()
   ```
   Math.pow(8, 2);
   ```
4. Math.sqrt()
   ```
   Math.sqrt(64);
   ```
5. Math.abs()
   ```
   Math.abs(-4.7);
   ```
6. Math.sin()
7. Math.min() and Math.max(): can be used to find the lowest or highest value in a list of arguments
   ```
   Math.min(0, 150, 30, 20, -8, -200);    //-200
   ```
8. Math.random(): returns random number between 0(inclusive) and 1(exclusive)
   ```
   Math.random()    //0.043196079117372665
   ```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Functions
- Accessing a function without () returns the function and not the function result
- Variables declared within a JavaScript function, become LOCAL to the function.
- Local variables can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.

Arrow Functions
Example:
let myfunc=()=>{
console.log("Hello")
}
Example:
let myfunc=(a,b)=>{
a*b;
}

forEach loop in Arrays
arr.forEach(callBackFunction)
callBackFunction: Here, it is a function to execute for each element in array
* A callback is a function passed as an argument to another function.
Example:
let arr =[1,2,3,4,5]
arr.forEach(function myfunc(val){
console.log(val);
});

But in callback function we usually pass arrow function as below,
let arr = [1,2,3,4,5]
arr.forEach((val,idx,arr)=>{
console.log(val,idx,arr);
});

Callback function in forEach has three parameters -> value, index, array itself
forEach is only used for arrays and not for strings
forEach is Higher order function (Higher order function is a function which takes a function as a parameter or return function as output)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Array Functions

1. Map Function
To create new array after doing some operation in old array
Example:
let arr = [1,2,3,4,5]
let new_arr = arr.map((val)=>{
return val*2
});

2. Filter Function
Creates a new array of elements that give true for a condition/filter.
Example:
let arr=[1,4,32,77]
let newarr = arr.filter((val)=>{
return val %2 == 0;
});

3. Reduce Function
Performs some operation and reduces the array to single value. It returns that single value.
Example:
let arr=[1,2,3,4]
let newval = arr.reduce((res, curr)=>{
return res + curr;
});

----------------------------------------------------------------
Window Object
The window object represents an open window in a browser. It is browser's object (not js) & is automatically created by browser. It is global object with lots of properties and methods.
Example: window.console.log("Hello")
Example: window.alert("Hello")

DOM (Document Object Model)
- When a webpage is loaded, the browser creates a Document Object Model of the page.
- window -> document -> html -> body -> div -> h1
- To print object we use console.dir Example: console.dir(window.document)

DOM manipulation

-------------------------------------------------------------------------------------------------------------------------------
Event Handlers and Event Objects

1. Selecting with ID: getElementById
example:
let heading = document.getElementById("heading");
console.dir(heading);

2. Selecting with Class Name: getElementsByClassName
example:
let headings = document.getElementsByClassName("headings");

3. Selecting with Tag: getElementsByTagName
example:
let para = document.getElementsByTagName("p");

4. Query Selector
document.querySelector("myId/myClass/myTag") //returns first element which is matching
document.querySelectorAll("myId/myClass/myTag") //returns a nodelist

- DOM has three nodes: text nodes, comment nodes and element nodes.
- properties: firstChild, lastChild, div.children[0]

Properties:
- tagName: returns tag for element nodes
- innerText: returns the text content of the element and all its children
- innerHTML: returns the plain text or HTML contents in the element
- textContent: returns textual content even for hidden elements 

Attributes
- getAttribute(attr) //to get the attribute value
- setAttribute(attr,val) //to set the attribute val

Style
node.style
example: div.style.bachgroundColor("blue")

Insert Elements

First create it, let el = document.createElement("div")
1. node.append(el) //adds at the end of the node (inside)
2. node.prepend(el) //adds at the start of the node (inside)
3. node.before(el) //adds before the node (outside)
4. node.after(el) //adds after the node (outside)

Delete Elements
node.remove()


----------------------------------------
Objects

Example:
const student = {
 fullName: "xyz",
 marks: 94.4,
 printMarks: function () {
  console.log("marks = ",this.marks);
},
};

JS objects have a special property called prototype.
We can set prototype using __proto__

Example of setting prototype

const employee = {
 calTax() {
 console.log("tax rate is 10%")
},
}

const swami = {
 salary : 5000000;
}; 

swami.__proto__ = employee;
now swami can access calTax function as we set it in proto

Note: If Object and prototype has same method, then object's method will be used.

Another way to create object is using class
Example:
class ToyotaCar {
   start(){
     console.log("start");
}
   stop(){
     console.log("stop");
}
}

let fortuner = new ToyotaCar();
