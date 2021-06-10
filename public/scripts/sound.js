class Sound {
    constructor() {
        this.fxVolume = 0.5;
        this.soundVolume = 0.5;
        this.songVolume = 0.03;
        this.fx = new Audio();
        this.song = new Audio();
        this.sound = new Audio();
    }
    playFX(_sound) {
        this.fx.src = `sounds/${_sound}.mp3`;
        this.fx.volume = this.fxVolume;
        this.fx.play();
    }
    playSong(_sound) {
        this.song.src = `sounds/${_sound}.mp3`;
        this.song.loop = true;
        this.song.volume = this.songVolume;
        this.song.play();
    } 
    playSound(_sound) {
        this.sound.src = `sounds/${_sound}.mp3`;
        this.sound.volume = this.soundVolume;
        this.sound.play();
    }
    mute(_type) {
        if(_type == "fx") { 
            this.fx.muted = true;
            this.sound.muted = true;
        } else if (_type == "song") {
            this.song.muted = true;
        }
    }
    unmute(_type) {
        if(_type == "fx") { 
            this.fx.muted = false;
            this.sound.muted = false;
        } else if (_type == "song") {
            this.song.muted = false;
        }
    }
    setVolume(_volume) {
        this.volume = _volume;
    }
}