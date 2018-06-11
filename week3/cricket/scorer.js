"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsman = [];
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsman.push(batsman);
    };
    Scorer.prototype.changeStrike = function (currentPlayerOnStrike) {
        var newPlayerOnStrike;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        }
        else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    };
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        var playerOnStrike = this.listOfBatsman[0];
        arr.forEach(function (runScored, ballNumber) {
            if (runScored % 2 === 1) {
                if (playerOnStrike) {
                    console.log(playerOnStrike);
                    playerOnStrike.addRuns(runScored);
                    playerOnStrike = _this.changeStrike(playerOnStrike);
                }
            }
            else {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                }
            }
            _this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                if (playerOnStrike) {
                    playerOnStrike = _this.changeStrike(playerOnStrike);
                }
            }
        });
    };
    Scorer.prototype.printScore = function () {
        console.log("Total score: " + this.totalScore);
        this.listOfBatsman.forEach(function (batsman) {
            console.log(batsman.playerName + " scored " + batsman.numberOfRuns);
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
