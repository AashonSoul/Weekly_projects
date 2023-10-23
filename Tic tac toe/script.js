console.log("Welcome to Tic Tac Toe");
let music = new Audio('music.mp3');
let turn_audio = new Audio('ting.mp3');
let gameover_audio = new Audio('gameover.mp3');
let turn = "X";
let gameover = false;
let reset = document.getElementById("reset");

// Function to change the turn
const change_turn = ()=>{
    return turn ==="X" ? "O" : "X";
}

// Function to check Win
const check_win = ()=>{
    let box_text = document.getElementsByClassName('box_text');
    let wins = [
        [0,1,2, 5,5,0],
        [3,4,5, 5,15,0],
        [6,7,8, 5,25,0],
        [0,3,6, -5,15,90],
        [1,4,7, 5,15,90],
        [2,5,8, 15,15,90],
        [0,4,8, 5,15,45],
        [2,4,6, 5,15,-45]
    ]
    wins.forEach(e =>{
        if((box_text[e[0]].innerText === box_text[e[1]].innerText) && (box_text[e[1]].innerText === box_text[e[2]].innerText) && (box_text[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = box_text[e[0]].innerText + " WON";
            gameover = true;
            document.querySelector(".img_box").getElementsByTagName('img')[0].style.width = "14vw";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game logic
// music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let box_text = element.querySelector(".box_text");
    element.addEventListener('click', ()=>{
        if(box_text.innerText ===""){
            box_text.innerText = turn;
            turn = change_turn();
            turn_audio.play();
            check_win();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});

// Reset button
reset.addEventListener('click', ()=>{
    let box_texts = document.querySelectorAll(".box_text");
    console.log(box_texts)
    Array.from(box_texts).forEach(element =>{
        element.innerText = '';
    });
    turn = "X";
    gameover= false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".img_box").getElementsByTagName('img')[0].style.width = "0vw";
})