"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name) {
        var _this = _super.call(this, name) || this;
        _this.NumberOfBallsFaced = 0;
        _this.NumberOfRunsScored = 0;
        return _this;
    }
    Object.defineProperty(Batsman.prototype, "numberOfRuns", {
        get: function () {
            return this.NumberOfRunsScored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "numberOfBalls", {
        get: function () {
            return this.NumberOfBallsFaced;
        },
        enumerable: true,
        configurable: true
    });
    Batsman.prototype.addRuns = function (score) {
        return this.NumberOfRunsScored += score;
    };
    return Batsman;
}(Player_1.Player));
exports.Batsman = Batsman;
