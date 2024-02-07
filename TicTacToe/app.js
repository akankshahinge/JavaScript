let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgCont.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("clicked")
      if(turn0)     //player 0 turn
      {
        box.innerHTML="O";
        turn0 = false;
      }
      else{         //player X turn
        box.innerHTML="X";
        turn0 = true;
      }
      box.disabled = true;
      chkWinner();
    });
  });

  const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
  }

  const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }

  const showWinner =(winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
  }

  const chkWinner = () =>{
    for(let pattern of winPatterns){

        pos1Value = boxes[pattern[0]].innerText
        pos2Value = boxes[pattern[1]].innerText
        pos3Value = boxes[pattern[2]].innerText

        //winner condition
        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value==pos2Value && pos2Value==pos3Value && pos3Value==pos1Value)
            {
                console.log("winner", pos2Value)
                showWinner(pos2Value);
            }
        }
    }

  }

  newGameBtn.addEventListener("click",resetGame);
  restbtn.addEventListener("click",resetGame);

  
  