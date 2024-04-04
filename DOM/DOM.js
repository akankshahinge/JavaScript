const title_id = document.getElementById("title").id;
console.log(title_id);
const title_className = document.getElementById("title").className;
console.log(title_className);

//------------------------------------------------------------------------------------------------------
//getAttribute
const titleId = document.getElementById("title").getAttribute('id');
console.log("Get Attribute ID - ",titleId);
const titleClass = document.getElementById("title").getAttribute('class');
console.log("Get Attribute Class - ",titleClass);
//------------------------------------------------------------------------------------------------------
//setAttribute
//setAttribute will set new heading to title Id. It will override the existing class.
document.getElementById("title").setAttribute('class','headingAgain');
//setting multiple class
document.getElementById("title").setAttribute('class','headingAgain newHeading');
//------------------------------------------------------------------------------------------------------
//Giving style to elements
document.getElementById("title").style.backgroundColor ="green";
//------------------------------------------------------------------------------------------------------
//Retrieving content
const title = document.getElementById("title");

//textContent gives the total content and also which is not dispalyed and set as none
const title_content = title.textContent;
console.log(title_content)  //DOM learning Hello Hey There!

//innerText gives the text which is displayed on screen
const title_inner_Text = title.innerText;
console.log(title_inner_Text)  //DOM learning

//innerHTML gives all html code inside selected element
const title_inner_html = title.innerHTML;
console.log(title_inner_html) //DOM learning <span style="display: none;">Hello Hey There!</span>

//------------------------------------------------------------------------------------------------------
//Get by className
const heading = document.getElementsByClassName("heading");
console.log("Heading - ", heading);

const myListClass = document.getElementsByClassName('mylist');  //gives HTML Collection, and which dont have method to loop on it
console.log("mylist ",myListClass)

//To loop on HTML Collection convert it into Array
const converted_arr = Array.from(myListClass)
console.log("Converted ",converted_arr);
converted_arr.forEach(function (li) {
    li.style.color = "yellow"
})

//------------------------------------------------------------------------------------------------------
//Query Selector
const h2 = document.querySelector('h2');
console.log(h2)
//selecting ID
const title_query_selector = document.querySelector('#title');
console.log(title_query_selector)
//selecting class
const heading_query_selector = document.querySelector('.headingAgain');
console.log(heading_query_selector)
//selecting list
const myul = document.querySelector('ul');      //gives enitre list
const myli = myul.querySelector('li');          //gives first list item
myli.style.background = "green";
//------------------------------------------------------------------------------------------------------
//Query Selector All
const myLi = document.querySelectorAll('li');  //here all li will be in NodeList myLi
myLi[1].style.background = "green";

myLi.forEach(function (li) {
    li.style.fontFamily = "cursive";
})
//-----------------------------------------------------------------------------------------------------
