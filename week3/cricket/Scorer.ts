import { Batsman } from './batsman';
export class Scorer {
    listOfBatsman: Array<Batsman>;
    totalScore: number;
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }
    changeStrike(currentPlayerOnStrike: Batsman) {
        let newPlayerOnStrike: Batsman;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        } else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    }
    calculateScore(arr) {
        let playerOnStrike ;
        arr.forEach((Data, ballNumber) => {
    
            for(var i=0;i<this.listOfBatsman.length;i++)
            {
                if(this.listOfBatsman[i]==Data.batsmanName && )
                   playerOnStrike = this.listOfBatsman[i];
            }
            if (Data.runsScored % 2 === 1) {
                    playerOnStrike.addRuns(Data.runsScored);
                    playerOnStrike = this.changeStrike(playerOnStrike);
            } else {
              
                    playerOnStrike.addRuns(Data.runsScored);
              
            }
            this.totalScore += Data.runsScored;
            if ((ballNumber + 1) % 6 === 0) {
                if (playerOnStrike) {
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            }
        })
    }

    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
        })
    }
}