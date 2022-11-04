function BallDraw() {
    this.ballDrawnNumber = [];
    this.ballDrawnLetter = [];
    
    
    this.drawBall = () =>{
        let repeat = 0;
        let ballLetter;
        let ballNumber = 1 + Math.floor(Math.random() * 75);
        for (var index = 0; index < 75; index++) {
            if (ballNumber == this.ballDrawnNumber[index] && ballLetter == this.ballDrawnLetter[index]) {
                repeat++;
            }

        }

        if (repeat == 0) {
            if (ballNumber < 15) {
                this.ballDrawnLetter.push("B");
                this.ballDrawnNumber.push(ballNumber);

            }
            else if (ballNumber > 15 && ballNumber <= 30) {
                this.ballDrawnLetter.push("I");
                this.ballDrawnNumber.push(ballNumber);

            }
            else if (ballNumber > 31 && ballNumber <= 45) {
                this.ballDrawnLetter.push("N");
                this.ballDrawnNumber.push(ballNumber);

            }
            else if (ballNumber >= 46&&ballNumber <= 60) {
                this.ballDrawnLetter.push("G");
                this.ballDrawnNumber.push(ballNumber);

            }
            else if (ballNumber >= 61 && ballNumber <= 75) {
                this.ballDrawnLetter.push("O");
                this.ballDrawnNumber.push(ballNumber);

            }

        }
        else {
            ballNumber = 1 + Math.floor(Math.random() * 75);

        }
        repeat = 0;



    }
}
