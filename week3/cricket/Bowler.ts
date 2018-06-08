import {Player} from './Player'
export class Batsman extends Player{
    private NumberOfRunsScored:number;
    private NumberOfBallsFaced:number;
    constructor(name:string)
    {
        super(name);
        this.NumberOfBallsFaced=0;
        this.NumberOfRunsScored=0;
    }
    get numberOfRuns():number{
            return this.NumberOfRunsScored;
    }
    get numberOfBalls():number{
        return this.NumberOfBallsFaced;
    }
    addRuns(score:number):number{
        return this.NumberOfRunsScored+=score;
    }
}