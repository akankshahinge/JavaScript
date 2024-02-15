BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector("#convert-title");


for (let select of dropdowns){
    for (code in countryList) {
        //create option node
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;

        //logic to select default currency code when website is opened
        if(select.name === "from" && code === "USD")
        {
            newOption.selected = "selected";
        }
        if(select.name === "to" && code === "INR")
        {
            newOption.selected = "selected";
        }


        select.append(newOption);
    }

    //update Flag when select is changed
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newLink = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newLink
}

const updateExchangeRate = async() => {
    let input_val = document.querySelector("form input");
    let amt = input_val.value;
    if (amt === "" || amt < 1)
    {
        amt = 1;
        input_val.value = "1";
    }

    //form base URL
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    //get exchange rate
    let res = await fetch(URL);
    let data = await res.json()
    let rate = data[toCurr.value.toLowerCase()]

    let final_amt = amt*rate;
    msg.innerText = `${amt} ${fromCurr.value} = ${final_amt} ${toCurr.value}`

}


btn.addEventListener("click",(evt)=>{
//remove all the default activity after the button is clicked
evt.preventDefault();
updateExchangeRate();

});

window.addEventListener("load", () => {
    updateExchangeRate();
  });
