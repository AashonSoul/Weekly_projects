console.log('Welcome to scripting');

let progress = document.getElementById('progress_bar');
let song = document.getElementById('song');
let control_icon = document.getElementById('control_icon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function play_pause(){
    if(control_icon.classList.contains("fa-pause")){
        song.pause();
        control_icon.classList.remove('fa-pause');
        control_icon.classList.add('fa-play');
    }
    else{
        song.play();
        control_icon.classList.remove('fa-play');
        control_icon.classList.add('fa-pause');
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    control_icon.classList.remove('fa-play');
    control_icon.classList.add('fa-pause');
}