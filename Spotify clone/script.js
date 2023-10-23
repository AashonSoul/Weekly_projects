console.log("Welcome to spotify");

//Initialize the variables
let song_index = 0;
let audio_element = new Audio('song/1.mp3');
let master_play = document.getElementById("master_play");
let my_progress_bar = document.getElementById("progress_bar");
let gif = document.getElementById("gif");
let song_items = Array.from(document.getElementsByClassName("song_item"));
let song_item_play = Array.from(document.getElementsByClassName('song_item_play'));
let master_song_name = document.getElementById('master_song_name');
let previous = document.getElementById('previous');
let next = document.getElementById('next');

let songs = [
    {song_name: "Katra karta", file_path: "song/1.mp3", cover_path: "covers/1.jpg"},
    {song_name: "Alvida", file_path: "song/2.mp3", cover_path: "covers/2.jpg"},
    {song_name: "Andheron mein", file_path: "song/3.mp3", cover_path: "covers/3.jpg"},
    {song_name: "Bas ek baar", file_path: "song/4.mp3", cover_path: "covers/4.jpg"},
    {song_name: "Tera bina", file_path: "song/5.mp3", cover_path: "covers/5.jpg"},
    {song_name: "Phir wahi", file_path: "song/6.mp3", cover_path: "covers/6.jpg"},
    {song_name: "Meri tanhaiyon mein", file_path: "song/7.mp3", cover_path: "covers/7.jpg"},
    {song_name: "Kuch parbat hilaye", file_path: "song/8.mp3", cover_path: "covers/8.jpg"},
    {song_name: "Junooni", file_path: "song/9.mp3", cover_path: "covers/9.jpg"}
]

song_items.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover_path;
    element.getElementsByClassName("song_name")[0].innerText = songs[i].song_name;
});


// audio_element.play();

// Handle play/plause click
master_play.addEventListener('click', ()=>{
    if(audio_element.paused || audio_element.currentTime<=0){
        audio_element.play();
        master_play.classList.remove('fa-circle-play');
        master_play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio_element.pause();
        master_play.classList.add('fa-circle-play');
        master_play.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})
// Listen to events
audio_element.addEventListener('timeupdate', ()=>{
    // Update seek baar
    progress = parseInt((audio_element.currentTime/audio_element.duration) * 100);
    my_progress_bar.value = progress;
});

my_progress_bar.addEventListener('change', ()=>{
    audio_element.currentTime =(my_progress_bar.value * audio_element.duration)/100;
});

const make_all_play = ()=>{
    song_item_play.forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

song_item_play.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        make_all_play();
        song_index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio_element.src = `song/${song_index+1}.mp3`;
        master_song_name.innerText = songs[song_index].song_name;
        audio_element.currentTime = 0;
        audio_element.play();
        gif.style.opacity=1;
        master_play.classList.add('fa-circle-pause');
        master_play.classList.remove('fa-circle-play');
    })
})

next.addEventListener('click', ()=>{
    if(song_index >= 9 ){
        song_index = 0;
    }
    else{
        song_index += 1;
    }
    audio_element.src = `song/${song_index+1}.mp3`;
    master_song_name.innerText = songs[song_index].song_name;
    audio_element.currentTime = 0;
    audio_element.play();
    master_play.classList.add('fa-circle-pause');
    master_play.classList.remove('fa-circle-play');
})

previous.addEventListener('click', ()=>{
    if(song_index <= 0 ){
        song_index = 0;
    }
    else{
        song_index -= 1;
    }
    audio_element.src = `song/${song_index+1}.mp3`;
    master_song_name.innerText = songs[song_index].song_name;
    audio_element.currentTime = 0;
    audio_element.play();
    master_play.classList.add('fa-circle-pause');
    master_play.classList.remove('fa-circle-play');
})
