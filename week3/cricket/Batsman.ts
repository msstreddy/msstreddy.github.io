import {Player} from './Player'
export class Batsman extends Player{
    private NumberOfRunsScored:number;
    private NumberOfBallsFaced:number;
    private IsOut:boolean;
    private dismissalType:String|null;
    constructor(name:string)
    {
        super(name);
        this.NumberOfBallsFaced=0;
        this.NumberOfRunsScored=0;
        this.IsOut=false;
        this.dismissalType=null;
    }
    get numberOfRuns():number{
            return this.NumberOfRunsScored;
    }
    get numberOfBalls():number{
        return this.NumberOfBallsFaced;
    }
    get isOut():boolean{
        return this.IsOut;
    }
    get DismissalType(){
        return this.dismissalType;
    }
    addRuns(score:number):number{
        return this.NumberOfRunsScored+=score;
    }
}