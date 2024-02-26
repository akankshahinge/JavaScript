//Different Array Search Methods: includes, indexOf, lastIndexOf, find, findLast, findIndex, findLastIndex

//includes
const p = document.getElementById("includes");
const fruits = ["apple", "mango" ,"cherry","banana"];
const fruit = fruits.includes("cherry");
p.innerText = "Does fruits array includes cherry? "+fruit;

//indexOf
const i = document.getElementById("indexof");
const fruitArray = ["apple", "mango" ,"cherry","banana"];
const position = fruitArray.indexOf("cherry")+1;
i.innerText = "The position of cherry is "+position;

//lastIndexOf
const l = document.getElementById("lastindexof");
const lastfruitArray = ["apple","cherry", "mango" ,"cherry","banana"];
const lastPosition = lastfruitArray.lastIndexOf("cherry") + 1;
l.innerText = "The last position of cherry is "+lastPosition;

//find
const f = document.getElementById("find");
const element = [12,15,16,21,90,22,45]
const findFunction = (value, index, array) =>{
    return value>18;
}
const findElement = element.find(findFunction);
f.innerText = "The value greater than 18 is "+findElement;

//findLast
const fl = document.getElementById("findlast");
const findlastFunction = (value, index, array) =>{
    return value>18;
}
const findlastElement = element.findLast(findlastFunction);
fl.innerText = "The value greater than 18 is "+findlastElement;

//findIndex
const fi = document.getElementById("findindex");
const findElementIndex = element.findIndex(findFunction);
fi.innerText = "The value greater than 18 is "+findElementIndex;

//findLastIndex
const flast = document.getElementById("findlastindex");
const findLastElementIndex = element.findLastIndex(findFunction);
flast.innerText = "The value greater than 18 is "+findLastElementIndex;

