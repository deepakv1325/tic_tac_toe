let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newbtn");
let msgCont = document.querySelector(".msgcont")
let msg = document.querySelector("#msg");

let turno = true;
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

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box xliked")
        if(turno){
            box.innerText="O";
            turno=false;
        } else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    })
})


const resetGame = () =>{
    turno=true;
    enableBoxes();
    msgCont.classList.add("hide");

}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const diableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (WINNER) =>{
    msg.innerText = `Congragulations, Winner is ${WINNER}`;
    msgCont.classList.remove("hide");
    diableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){      

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("WINNER",pos1Val);
                    showWinner(pos1Val);
                }

            }

    }

}
 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);