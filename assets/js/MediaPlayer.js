let video = document.querySelector("video");
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

export default MediaPlayer;
