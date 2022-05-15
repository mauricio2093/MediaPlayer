import MediaPlayer from './MediaPlayer.js' ;
let video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer();

const toggle = () => {
    video.paused === false ? player.pause() : player.play();
};

button.onclick = () => toggle()
console.log('hola mundo');
