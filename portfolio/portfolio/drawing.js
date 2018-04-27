/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */
var bg
var cookieGoods
var cookieGreat
var cookieBad
var cookieBadX = 100
var cookieGoodX = 350
var cookieGreatX = 600
var ypos = 0;
var ypos1 = 0;
var ypos2 = 0;
var score = 0;
var cookieSound
var turns

function preload() {
    bg = loadImage("bg.jpg")
        // +1
    cookieGood = loadImage("cookie1.png")
        // -1
    cookieBad = loadImage("cookieBad.png")
        // +2
    cookieGreat = loadImage("cookieDouble.png")

    soundFormats('mp3', 'ogg');

    cookieSound = loadSound('cookiemonster.mp3')
}





function setup() {
    var canvas = createCanvas(800, 600);

    canvas.parent('sketch-holder');

    cookieSound.setVolume(0.2);
    cookieBackgroundMusic = loadSound('')
}


/* This function is called over and over again by P5. Animation should happen here! */
function draw() {
    //Background img
    background(bg)
        //speed for 1st cookie
    ypos = ypos + 2;
    //speed for 2nd cooke
    ypos1 = ypos1 + 3;
    //speed for 3rd cookie
    ypos2 = ypos2 + 10;


    //speed for 1st cookie

    if (ypos > height) {
        ypos = 0;
    }
    //speed for 2nd cooke

    if (ypos1 > height) {
        ypos1 = 0;
    }
    //speed for 3rd cookie

    if (ypos2 > height) {
        ypos2 = 0;
    }


    // "Cookie" image(variable, x, y, width, height)
    image(cookieBad, cookieBadX, ypos, 100, 100)
    image(cookieGood, cookieGoodX, ypos1, 90, 90)
    image(cookieGreat, cookieGreatX, ypos2, 120, 120)


}

function mouseClicked() {

    document.getElementById("meh").innerHTML = "Score: " + score

    if (mouseX >= cookieBadX - 50 && mouseX <= cookieBadX + 50 && mouseY >= ypos - ypos / 2 && mouseY <= ypos + ypos / 2) {
        score -= 1;
        cookieSound.play();
        console.log(score);
    } else if (mouseX >= cookieGoodX - 175 && mouseX <= cookieGoodX + 175 && mouseY >= ypos1 - ypos1 / 2 && mouseY <= ypos1 + ypos1 / 2) {
        score += 1;
        cookieSound.play();
        console.log(score);
    } else if (mouseX >= cookieGreatX - 300 && mouseX <= cookieGreatX + 300 && mouseY >= ypos2 - ypos2 / 2 && mouseY <= ypos2 + ypos2 / 2) {
        score += 2;
        cookieSound.play();
        console.log(score);
    }

    if (score >= 72) {
        score = 0
        console.log("You Win!!!, Start Over?")
        alert("You Win!!!, Start Over?")
    }

    /* var stoofToSend = {
        x: cookieBadX,
        y: ypos,
        x1: cookieGoodX,
        y1: ypos1,
        x2: cookieGreatX,
        scoah: score
    }
    socket.emit("coordinates", stoofToSend)
*/


}



/*socket.on("coordinates", function (info) {

    document.getElementById("meh").innerHTML = "Score: " + info.scoah

    if (mouseX >= info.x - 50 && mouseX <= info.x + 50 && mouseY >= info.y - info.y / 2 && mouseY <= info.y + info.y / 2) {
        score -= 1;
        cookieSound.play();
        console.log(score);
    } else if (mouseX >= info.x1 - 175 && mouseX <= info.x1 + 175 && mouseY >= info.y1 - info.y1 / 2 && mouseY <= info.y1 + info.y1 / 2) {
        score += 1;
        cookieSound.play();
        console.log(score);
    } else if (mouseX >= info.x2 - 300 && mouseX <= info.x2 + 300 && mouseY >= info.y2 - info.y2 / 2 && mouseY <= info.y2 + info.y2 / 2) {
        score += 2;
        cookieSound.play();
        console.log(score);
    }



})*/