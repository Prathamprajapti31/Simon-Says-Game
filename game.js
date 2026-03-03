// ----------------video-6------------------------------------------
let gameSequence = [];
let userSequence = [];

let btns = ["red", "yellow", "green", "purpule"]; //video-7

let started = false;
let level = 0;
let highScore = 0;


document.addEventListener("keypress", function () {  // to start game by pressing any key

    if (started == false) {
        console.log("game is started!!!");
        started = true; // varvam var key press thi game start ni thay jya sudhi, gameover ni thay ena mate ek var start thaya pachhi badlyu
    }
    levelUp();// video-7
});

// -------------------------video-7----------------------------------

function levelUp() {
    userSequence = []; // level up  thay etle user ee pachha badha button 
    // press karva pade ena mate array ne pachho khali karyo     VIDEO_9


    level++;
    let h3 = document.querySelector('h3');
    h3.innerText = `Level ${level}`;

    // genrate random buuton flash

    let randIdx = Math.floor(Math.random() * 4);// index genrate kari btns array na element select karva
    let randColor = btns[randIdx]; // random index vado color vadu button joie em
    let randBtn = document.querySelector(`.${randColor}`);// btns array mathi madeli string thi html tag no 'class' acess karyo 


    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    // -------------------------video-9----------------------------------
    gameSequence.push(randColor);
    console.log(gameSequence);

    // -----------------------------------------------------------------


    Gameflash(randBtn);
}
// button flash thase to su thase 
function Gameflash(btn) {
    btn.classList.add("flash"); // background color white tahse
    setTimeout(function () {
        btn.classList.remove("flash"); // class remove karine pachho orginal color aavse
    }, 250);
}

// -------------------------video-9----------------------------------
function checkAns(idx) {
    let h3 = document.querySelector("h3");
    if (gameSequence[idx] === userSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let h3 = document.querySelector("h3");

        // ✅ Update High Score
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
// -------------------------video-10----------------------------------
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
// -----------------------------------------------------------------

// -----------------------------------------------------------------



// -------------------------video-8----------------------------------

function buttonpress() {
    console.log(this)// kayu button chhe te this ma aavyu te 
    let btn = this;
    userflash(btn); // jyre button click karse user tyre userflash call thase

    // -------------------------video-9----------------------------------

    usercolor = btn.getAttribute("id");
    userSequence.push(usercolor);

    checkAns(userSequence.length - 1);
    // -----------------------------------------------------------------
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", buttonpress);
}

function userflash(btn) {
    btn.classList.add("userflash"); // background color white tahse
    setTimeout(function () {
        btn.classList.remove("userflash"); // class remove karine pachho orginal color aavse
    }, 250);
}