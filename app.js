
let gameSequence = [];
let userSequence = [];

let btns = ["red", "yellow", "green", "purpule"]; 

let started = false;
let level = 0;
let highScore = 0;


document.addEventListener("keypress", function () {  

    if (started == false) {
        console.log("game is started!!!");
        started = true; 
    }
    levelUp();
});



function levelUp() {
    userSequence = []; 


    level++;
    let h3 = document.querySelector('h3');
    h3.innerText = `Level ${level}`;

    

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx]; 
    let randBtn = document.querySelector(`.${randColor}`); 


    

    
    gameSequence.push(randColor);
    console.log(gameSequence);

    


    Gameflash(randBtn);
}

function Gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash"); 
    }, 250);
}


function checkAns(idx) {
    let h3 = document.querySelector("h3");
    if (gameSequence[idx] === userSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let h3 = document.querySelector("h3");

        
        if (level > highScore) {
            highScore = level;
        }

        h3.innerHTML = `
    Game Over. <b>Your Score: ${level}</b><br>
    <b>Highest Score: ${highScore}</b><br>
    Press any key to start!!!
    `;


        reset();
        changebackground();
    }
}

function reset() {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}

function changebackground() {
    let body = document.querySelector('body');
    body.classList.add("gameover");
    setTimeout(function () {
        body.classList.remove("gameover");

    }, 500)

}


function buttonpress() {
    console.log(this)
    let btn = this;
    userflash(btn); 

    
    usercolor = btn.getAttribute("id");
    userSequence.push(usercolor);

    checkAns(userSequence.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", buttonpress);
}

function userflash(btn) {
    btn.classList.add("userflash"); 
    setTimeout(function () {
        btn.classList.remove("userflash"); 
    }, 250);
}