import { Batsman } from './batsman';
import { Scorer } from './scorer';
const scorer = new Scorer();
const batsman_list=["K L Rahul","Rohit Sharma","hemchand"];
const bowler_list=["Bravo","narayan","watson"];
for(var i=0;i<batsman_list.length;i++)
    scorer.addBatsman(new Batsman(batsman_list[i]));
var obj = ([
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": 'Root',
            "hasBatsmanCrossed": true,
            "batsmanOut": "striker" ,
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
   
]
);

scorer.calculateScore(obj);
scorer.printScore();