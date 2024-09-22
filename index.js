var clicks = 0;
var text = document.getElementById("text_clicker");

async function clickCounter() {

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    displayClickText();
    
};


function displayClickText() {
    if (clicks < 10) {
        text.innerText = "Okay, we got some clicks going!";
    }
    else if (clicks < 25) {
        text.innerText = "Oh snap, that brother is clicking!";
    }
    else if (clicks < 50) {
        text.innerText = "Wow... thats a good amount of clicks... lmao";
    }
    else if (clicks < 100) {
        text.innerText = "Alright gang, you got it...";
    }
    else if (clicks < 150) {
        text.innerText = "I have no words...";
    }
};