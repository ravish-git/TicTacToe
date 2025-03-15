let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () => {
    turnO = true;
    enablebox();
    count =0;
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gamedraw();
        }
    });
});

const gamedraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations the Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkWinner = () => {
    for (let pattern of winpat){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};


newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
