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
//Accessing Parent and Child Element
const parent = document.querySelector('.parent');
console.log(parent)

//Get the children from parent
console.log(parent.children)     //returns HTMLCollection
//We can run a for loop on this parent.children, but if we want to run forEach then convert it into array
for (let index = 0; index < parent.children.length; index++) {
    console.log(parent.children[index].innerText);
}

//Get First Element
console.log("FirstElementChild ",parent.firstElementChild);
//Get Last Element
console.log("LastElementChild ",parent.lastElementChild);

//Get the Parent from Children
const dayone = document.querySelector('.day');
console.log(dayone);
console.log("Parent ",dayone.parentElement);

//Get the next silbing from child
console.log("Sibling ",dayone.nextElementSibling);

//Get Child Nodes
console.log("Child Nodes", parent.childNodes);  //It also counts the linebreak and enters
//-----------------------------------------------------------------------------------------------------------
//Creating new Element in DOM

const div = document.createElement('div');
div.id = "myNewId";
div.className = "myNewClass";
div.style.backgroundColor = "green";
div.style.padding = "10px";
div.innerText = "Sample create node";
document.body.appendChild(div);
//-----------------------------------------------------------------------------------------------------------
//Edit Node, Delete Node
const my_list= document.querySelector(".myul");

function addNode(text){
    const my_liElement = document.createElement('li');
    my_liElement.innerText = text;
    my_liElement.style.fontFamily = "cursive";
    my_list.appendChild(my_liElement);
}

const lang_list = ["Python","Java","GoLang","C++"];
for (let i = 0; i < lang_list.length; i++) {
    addNode(lang_list[i])    
}

//Edit
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerText = "PHP";
//or you can use replaceWith to replace previous with new one
const my_liElement = document.createElement('li');
my_liElement.innerText = "C";
secondLang.replaceWith(my_liElement);

//Delete
const Lang = document.querySelector(".myul");
const Lang_items = Lang.querySelectorAll("li");
Lang_items[4].remove();
