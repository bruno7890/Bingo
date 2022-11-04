let divBingoCard = document.getElementById("divBingoCard");
let txtInput = document.getElementById("txtInput");
let pcardCount = document.getElementById("pCount");
let btnDraw = document.getElementById("btnDraw");
let pdrawBall = document.getElementById("pdrawBall");
let counter = 0;
let card;
let ballDraw;
let cardMatrixTotal = [];
let cardMatrix;
let cardLength;
let BingoWinner = false;
//The function draw() will draw a number of cards depend on the value given by the user function draw(){
function draw() {
    //Condition if the user click the draw button
    //without existing values in a field.
    if (txtInput.value == "") {
        alert("¡Ingrese el valor en el campo!");
    }
    else {
        //Validation for inputting numbers only 
        if (isNaN(txtInput.value)) {
            alert("Enter numbers only!");
            txtInput.value = null;

        }
        else {
            for (var i = 0; i < txtInput.value; i++) {
                //create object of BingoCard class
                card = new BingoCard();
                card.generateMatrix();
                divBingoCard.innerHTML += card.drawCard();
                counter++;
                cardMatrix = card.matrix;
                cardMatrixTotal.push(cardMatrix);
            }
            txtInput.value = null;
        }
    }
    pcardCount.innerHTML = `No  de cartones: ${counter}`;
}


function drawBall() {
    //create object of BallDraw class 
    ballDraw = new BallDraw();
    ballDraw.drawBall();
    //display draw ball
    pdrawBall.innerHTML = ballDraw.ballDrawnLetter +" - "+ballDraw.ballDrawnNumber;

    //loop through the bingo card numbers
    for (var i = 0; i < cardMatrixTotal.length; i++) {
        for (var j = 0; j < cardMatrixTotal[i].length; j++) {
            for (var k = 0; k < cardMatrixTotal[i][j].length; k++) {
                //highlights the number matched from drawball into the bingo card 
                if (cardMatrixTotal[i][j][k] == ballDraw.ballDrawnNumber) {
                    document.getElementById(cardMatrixTotal[i][j][k]).style.background = "red";
                    //function call to check winner
                    checkBingoWinner();
                }
            }
        }
    }
    //check if there is a bingo winner
    if (BingoWinner == true) {
        showWinnerCard();
    }

}

function showWinnerCard() {
    //user confirmation before restarting
    let confirmation = confirm("¡Hay un ganador! ¡BINGO! \Mostrar tarjeta BINGO?");
    if (confirmation != true) {
        clearCards();
    }
}
//clear or restart bingo card game
function clearCards() {
    //user confirmation before restarting
    let confirmation = confirm("¿Quieres borrar/restablecer el juego?");
    if (confirmation == true) {
        //restart
        window.location.reload();
    }
}

function checkBingoWinner() {
    //column and respective rows
    let c0r0 = document.getElementById(cardMatrixTotal[0][0][0]);
    let c0r0_color = c0r0.style.background;
    let c0r1 = document.getElementById(cardMatrixTotal[0][0][1]);
    let c0r1_color = c0r1.style.background;
    let c0r2 = document.getElementById(cardMatrixTotal[0][0][2]);
    let c0r2_color = c0r2.style.background;
    let c0r3 = document.getElementById(cardMatrixTotal[0][0][3]);
    let c0r3_color = c0r3.style.background;
    let c0r4 = document.getElementById(cardMatrixTotal[0][0][4]);
    let c0r4_color = c0r4.style.background;
    //column 1 and respective rows
    let c1r0 = document.getElementById(cardMatrixTotal[0][1][0]);
    let c1r0_color = c1r0.style.background;
    let c1r1 = document.getElementById(cardMatrixTotal[0][1][1]);
    let c1r1_color = c1r1.style.background;
    let c1r2 = document.getElementById(cardMatrixTotal[0][1][2]);
    let c1r2_color = c1r2.style.background;
    let c1r3 = document.getElementById(cardMatrixTotal[0][1][3]);
    let c1r3_color = c1r3.style.background;
    let c1r4 = document.getElementById(cardMatrixTotal[0][1][4]);
    let c1r4_color = c1r4.style.background;
    //column 2 and respective rows
    let c2r0 = document.getElementById(cardMatrixTotal[0][2][0]);
    let c2r0_color = c2r0.style.background;
    let c2r1 = document.getElementById(cardMatrixTotal[0][2][1]);
    let c2r1_color = c2r1.style.background;
    let c2r2 = document.getElementById(cardMatrixTotal[0][2][2]);
    let c2r2_color = c2r2.style.background;
    let c2r3 = document.getElementById(cardMatrixTotal[0][2][3]);
    let c2r3_color = c2r3.style.background;
    let c2r4 = document.getElementById(cardMatrixTotal[0][2][4]);
    let c2r4_color = c2r4.style.background;
    //column 3 and respective rows
    let c3r0 = document.getElementById(cardMatrixTotal[0][3][0]);
    let c3r0_color = c3r0.style.background;
    let c3r1 = document.getElementById(cardMatrixTotal[0][3][1]);
    let c3r1_color = c3r1.style.background;
    let c3r2 = document.getElementById(cardMatrixTotal[0][3][2]);
    let c3r2_color = c3r2.style.background;
    let c3r3 = document.getElementById(cardMatrixTotal[0][3][3]);
    let c3r3_color = c3r3.style.background;
    let c3r4 = document.getElementById(cardMatrixTotal[0][3][4]);
    let c3r4_color = c3r4.style.background;
    //column 4 and respective rows
    let c4r0 = document.getElementById(cardMatrixTotal[0][4][0]);
    let c4r0_color = c4r0.style.background;
    let c4r1 = document.getElementById(cardMatrixTotal[0][4][1]);
    let c4r1_color = c4r1.style.background;
    let c4r2 = document.getElementById(cardMatrixTotal[0][4][2]);
    let c4r2_color = c4r2.style.background;
    let c4r3 = document.getElementById(cardMatrixTotal[0][4][3]);
    let c4r3_color = c4r3.style.background;
    let c4r4 = document.getElementById(cardMatrixTotal[0][4][4]);
    let c4r4_color = c4r4.style.background;

    //check if bingo winner is by vertical
    if (c0r0_color == "red" && c0r1_color == "red" && c0r2_color == "red" && c0r3_color == "red" && c0r4_color == "red") {
        BingoWinner = true;
        c0r1.style.background = "yellow";
        c0r1.style.background = "yellow";
        c0r2.style.background = "yellow";
        c0r3.style.background = "yellow";
        c0r4.style.background = "yellow";

    }
    else if (c1r0_color == "red" && c1r1_color == "red" && c1r2_color == "red" && c1r3_color == "red" && c1r4_color == "red") {

        c1r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c1r2.style.background = "yellow";
        c1r3.style.background = "yellow";
        c1r4.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c2r0_color == "red" && c2r1_color == "red" && c2r2_color == "red" && c2r3_color == "red" && c2r4_color == "red") {

        c2r0.style.background = "yellow";
        c2r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c2r3.style.background = "yellow";
        c2r4.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c3r0_color == "red" && c3r1_color == "red" && c3r2_color == "red" && c3r3_color == "red" && c3r4_color == "red") {
        BingoWinner = true;
        c3r0.style.background = "yellow";
        c3r1.style.background = "yellow";
        c3r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c3r4.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c4r0_color == "red" && c4r1_color == "red" && c4r2_color == "red" && c4r3_color == "red" && c4r4_color == "red") {
        BingoWinner = true;
        c4r0.style.background = "yellow";
        c4r1.style.background = "yellow";
        c4r2.style.background = "yellow";
        c4r3.style.background = "yellow";
        c4r4.style.background = "yellow";
        BingoWinner = true;
    }
    //check if bingo winner is by horizontal
    else if (c0r0_color == "red" && c1r0_color == "red" && c2r0_color == "red" && c3r0_color == "red" && c4r0_color == "red") {

        c0r0.style.background = "yellow";
        c1r0.style.background = "yellow";
        c2r0.style.background = "yellow";
        c3r0.style.background = "yellow";
        c4r0.style.background = "yellow";
        BingoWinner = true;

    }
    else if (c0r1_color == "red" && c1r1_color == "red" && c2r1_color == "red" && c3r1_color == "red" && c4r1_color == "red") {

        c0r1.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r1.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r1.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c0r2_color == "red" && c1r2_color == "red" && c2r2_color == "red" && c3r2_color == "red" && c4r2_color == "red") {

        c0r2.style.background = "yellow";
        c1r2.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r2.style.background = "yellow";
        c4r2.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c0r3_color == "red" && c1r3_color == "red" && c2r3_color == "red" && c3r3_color == "red" && c4r3_color == "red") {
        BingoWinner = true;
        c0r3.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r3.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r3.style.background = "yellow";
        BingoWinner = true;
    }
    else if (c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red") {
        BingoWinner = true;
        c0r4.style.background = "yellow";
        c1r4.style.background = "yellow";
        c2r4.style.background = "yellow";
        c3r4.style.background = "yellow";
        c4r4.style.background = "yellow";
        BingoWinner = true;
    }
    //check if bingo winner is by diagonal

    else if (c0r0_color == "red" && c1r1_color == "red" && c2r2_color == "red" && c3r3_color == "red" && c4r4_color == "red") {

        c0r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r4.style.background = "yellow";
        BingoWinner = true;

    }
    else if (c0r4_color == "red" && c1r3_color == "red" && c2r2_color == "red" && c3r1_color == "red" && c4r0_color == "red") {

        c0r4.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r0.style.background = "yellow";
        BingoWinner = true;
    }
    else {
        console.log(" no bingo winner yet")
    }


}