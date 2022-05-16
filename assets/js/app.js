import MediaPlayer from './MediaPlayer.js'
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector('video'),
        buttonPlay = document.getElementById('play-pause'),
        buttonMute = document.getElementById('mute'),
        videoIconPlay = document.getElementById('video__icon-play'),
        videoIconMute = document.getElementById('video__icon-mute');

const player = new MediaPlayer({ video, plugins: [ new AutoPlay(video) ],videoIconPlay, videoIconMute});

buttonPlay.onclick = () => player.togglePlayPause();
buttonMute.onclick = () => player.toggleMuteUnmute();
video.addEventListener('ended', player.toggleFinalVideo);
