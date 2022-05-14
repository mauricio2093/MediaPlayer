const video = document.querySelector("video");
const button = document.querySelector("button");

class MediaPlayer {
    constructor(config) { 
        this.config = config;
    };
    play() {
        video.play();
    };
    pause() {
        video.pause();
    };
};

const player = new MediaPlayer();

const toggle = () => {
    video.paused === false ? player.pause() : player.play();
};

button.onclick = () => toggle()
