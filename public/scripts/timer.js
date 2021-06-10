class Timer {

    constructor(time, timerInterval, callbackTimeout, callbackTimeInterval) {
        this.time = time;
        this.timerInterval = timerInterval;
        this.callbackTimeout = callbackTimeout;
        this.callbackTimeInterval = callbackTimeInterval;
    }
    setTimer(_time) {
        this.time = _time;
        this.currentTime = 0;
    }
    setTimerInterval(_timerInterval = 100) {
        this.timerInterval = _timerInterval;
    }
    setCallbackTimeout(_callbackTimeout) {
        this.callbackTimeout = _callbackTimeout;
    }
    setCallbackTimeInterval(_callbackTimeInterval) {
        this.callbackTimeInterval = _callbackTimeInterval;
    }
    timeCount() {
        this.currentTime += this.timerInterval;
        if (this.currentTime >= this.time) {
            clearInterval(this.internalTimer);
            clearInterval(this.internalTimeRemaining);
        }
    }
    getCurrentTime() {
        return this.currentTime;
    }
    startTimer() {
        this.internalTimeRemaining = setInterval(() => { this.timeCount() }, this.timerInterval);
        this.internalTimeout = setTimeout(this.callbackTimeout, this.time);
        this.internalTimer = setInterval(this.callbackTimeInterval, this.timerInterval);
    }
    stopTimer() {
        clearTimeout(this.internalTimeout);
        clearInterval(this.internalTimer);
        clearInterval(this.internalTimeRemaining);
    }
    resetTimer() {
        this.stopTimer();
        this.time = 0;
        this.currentTime = 0;
        this.timerInterval = 100;
        this.callbackTimeout = "";
        this.callbackTimeInterval = "";
    }
    restartTimer() {
        this.stopTimer();
        this.time -= this.currentTime;
        startTimer();
    }
}