// AutoPlay
class AutoPlay {
    constructor(video) {
        this.video = video;
    }
    run() {
        this.video.muted = true
        this.video.play()
    }
}  
export default AutoPlay
