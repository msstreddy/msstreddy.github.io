"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.playerOnStrike = null;
        this.listOfBowler = [];
        this.activeBowler = null;
        this.balls = 0;
        this.wickets = 0;
        this.flag = false;
        this.count = 0;
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsman.push(batsman);
    };
    Scorer.prototype.addBowler = function (bowler) {
        this.listOfBowler.push(bowler);
    };
    Scorer.prototype.updateBatsman = function (playerOnStrike, runs) {
        this.playerOnStrike = playerOnStrike;
        this.playerOnStrike.numberOfBalls_set();
        this.playerOnStrike.addRuns(runs);
    };
    Scorer.prototype.updateBowler = function (activeBowler, runs) {
        this.activeBowler = activeBowler;
        this.activeBowler.addRuns(runs);
        this.activeBowler.addBalls();
    };
    Scorer.prototype.onOutBowler = function (activeBowler) {
        this.activeBowler = activeBowler;
        this.wickets++;
        this.activeBowler.addWickets();
    };
    Scorer.prototype.onOutBatsman = function (playerOnStrike, Data) {
        this.playerOnStrike = playerOnStrike;
        this.playerOnStrike.set_Isout(true);
        if (Data.dismissalType) {
            this.playerOnStrike.addDismissalType(Data.dismissalType);
            if (Data.dismissalType == "Run Out") {
                this.playerOnStrike.addtypeOfWicket("(Run Out)");
            }
        }
        if (Data.dismissalInfo) {
            this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
            if (Data.dismissalType == "Caught") {
                this.playerOnStrike.addtypeOfWicket("c " + Data.dismissalInfo.fielderName + " b " + Data.bowlerName);
            }
        }
    };
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        arr.forEach(function (Data, ballNumber) {
            for (var i = 0; i < _this.listOfBatsman.length; i++) {
                if (_this.listOfBatsman[i].playerName == Data.batsmanName && _this.listOfBatsman[i].isOut != true) {
                    _this.updateBatsman(_this.listOfBatsman[i], Data.runsScored);
                    break;
                }
            }
            for (var i = 0; i < _this.listOfBowler.length; i++) {
                if (_this.listOfBowler[i].playerName == Data.bowlerName) {
                    _this.updateBowler(_this.listOfBowler[i], Data.runsScored);
                    break;
                }
            }
            if (Data.isOut) {
                if (_this.activeBowler) {
                    _this.onOutBowler(_this.activeBowler);
                }
                if (_this.playerOnStrike) {
                    _this.onOutBatsman(_this.playerOnStrike, Data);
                }
                if (_this.flag == false && Data.runsScored == 0) {
                    _this.flag = true;
                    _this.count = 1;
                }
                else if (_this.flag == true && Data.runsScored == 0) {
                    _this.count++;
                    if (_this.count == 6) {
                        if (_this.activeBowler)
                            _this.activeBowler.madein();
                        _this.count = 0;
                        _this.flag = false;
                    }
                }
                else
                    _this.flag = false;
            }
            if (Data.extraInfo)
                _this.totalScore += Data.extraInfo.runsOffered;
            _this.totalScore += Data.runsScored;
            _this.balls++;
        });
    };
    Scorer.prototype.printScore = function () {
        console.log(chalk.blue('India') + ' vs ' + chalk.red('England'));
        console.log('');
        this.listOfBatsman.forEach(function (batsman) {
            if (batsman.isOut)
                console.log(batsman.playerName + batsman.typeofWicket + batsman.numberOfRuns + batsman.numberOfBalls);
            else
                console.log(chalk.green((batsman.playerName + '*')) + (batsman.typeofWicket) + (batsman.numberOfRuns) + "(" + (batsman.numberOfBalls) + ")");
        });
        console.log('');
        var overs = (Math.floor((this.balls) / 6) + (this.balls % 6) / 10);
        var rr = this.totalScore / overs * (6 / 10);
        console.log('Total' + chalk.blue(this.totalScore) + " for " + chalk.red(this.wickets) + "in " + overs + "overs " + " (RR - " + (rr) + ")");
        console.log('');
        console.log("BOwler" + "m" + "O" + "R" + "W");
        console.log('');
        this.listOfBowler.forEach(function (bowler) {
            var bowler_over = Math.floor((bowler.numberOfBalls) / 6) + (bowler.numberOfBalls % 6) / 10;
            console.log((bowler.playerName) + (bowler.get_madein()) + (bowler_over) + (bowler.numberOfRunsGiven) + (bowler.numberOfWickets));
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
