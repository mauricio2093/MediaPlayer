class AutoPause{
    constructor(video){
        this.video = video;
        this.threshold = 0.35;
        this.pausarVideo = this.pausarVideo.bind(this)
    }
    run(){
        const observador = new IntersectionObserver(this.pausarVideo, {
            root : null,
            threshold: this.threshold,
        });
        observador.observe(this.video)
    }
    pausarVideo(entries){
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.video.play();
        }else{
            this.video.pause();
        };
        
        
    }
}

export default AutoPause;
