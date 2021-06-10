class Score extends Timer {
    constructor(time, timerInterval, callbackTimeout, callbackTimeInterval, points) {
        super(time, timerInterval, callbackTimeout, callbackTimeInterval);
        this.scorePoints = 0;
        this.scorePointsOld = 0;
        this.ratioPoints;
        this.internalScoreCount;
        this.points = points;
    }
    startScore(_points) {
        super.stopTimer();
        this.scorePointsOld = this.scorePoints;
        this.scorePoints += _points;
    }
    getScorePoints() {
        return this.scorePoints;
    }
    getScorePointsOld() {
        return this.scorePointsOld;
    }
}