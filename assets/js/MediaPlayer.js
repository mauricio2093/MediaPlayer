class MediaPlayer {
    constructor({ video, plugins, videoIconPlay, videoIconMute }) {
        this.media = video;
        this.plugins = plugins || [];
        this._initPlugins();
        this.videoIconPlay = videoIconPlay;
        this.videoIconMute = videoIconMute;
    }
    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run()
        })
    }
    toggleMuteUnmute() {
        this.media.muted = !this.media.muted
        if(this.media.muted == true){
            this.videoIconMute.classList.add('ri-volume-mute-line');
            this.videoIconMute.classList.remove('ri-volume-up-line');
        }else{
            this.videoIconMute.classList.add('ri-volume-up-line');
            this.videoIconMute.classList.remove('ri-volume-mute-line');
        }
    }
    
    togglePlayPause() {
        if(this.media.paused){
            this.media.play()
            this.videoIconPlay.classList.add('ri-pause-line');
            this.videoIconPlay.classList.remove('ri-play-line');
        }else{ 
            this.media.pause()
            this.videoIconPlay.classList.remove('ri-pause-line');
            this.videoIconPlay.classList.add('ri-play-line');

        }
        
    }
    toggleFinalVideo(){
        // Video ends, icon change
        this.videoIconPlay.classList.remove('ri-pause-line');
        this.videoIconPlay.classList.add('ri-play-line');
    }
    // ended, when the video ends
}

export default MediaPlayer
