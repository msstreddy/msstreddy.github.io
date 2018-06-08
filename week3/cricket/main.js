"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var batsman_1 = require("./batsman");
var scorer_1 = require("./scorer");
var scorer = new scorer_1.Scorer();
var batsman_name = ["K L Rahul", "Rohit Sharma", "hemchand"];
for (var i = 0; i < batsman_name.length; i++) {
    scorer.addBatsman(new batsman_1.Batsman(batsman_name[i]));
}
var obj = ([
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": 'Root',
            "hasBatsmanCrossed": true,
            "batsmanOut": "striker",
        },
        "batsmanName": 'Rahul',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Rohit',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 4,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "isExtra": true,
        "extraType": 'byes',
        "extraInfo": {
            "runsOffered": 2
        },
        "batsmanName": 'Kohli',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Caught',
        "dismissalInfo": {
            "fielderName": 'Butcher',
            "hasBatsmanCrossed": false
        },
        "batsmanName": 'Kohli',
        "bowlerName": 'Broad'
    }
]);
scorer.calculateScore(obj);
scorer.printScore();
