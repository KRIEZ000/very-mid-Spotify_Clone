console.log('Welcome to Spotify');

let songIndex = 0;
let audioElement = new Audio('songs/song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');  // Fixed typo here
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName: "Salaam-e-Ishq", filePath:"songs/song1.mp3", coverPath: "CoverPage.png"},
    {songName: "ReneGade", filePath:"songs/song2.mp3", coverPath: "CoverPage2.jpg"},
    {songName: "Musu", filePath:"songs/song3.mp3", coverPath: "CoverPage3.png"},
    {songName: "MUSTAAARD", filePath:"songs/song4.mp3", coverPath: "CoverPage4.png"},
    {songName: "P-DIDDY", filePath:"songs/song5.mp3", coverPath: "CoverPage5.png"},
];

songItems.forEach((element, i)=>{
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath 
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// Handle Play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();

        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makellPlays =()=>{
    Array.from(document.getElementsByClassName('yo2')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}

Array.from(document.getElementsByClassName('yo2')).forEach((element)=>{
    element.addEventListener('click', (e)=>{

        songIndex = parseInt(e.target.id);

        console.log(e.target);
        makellPlays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/song${songIndex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex >=4){

        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src = `songs/song${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex <=0){

        songIndex=0;
    }
    else{
        songIndex-=1;
    }

    audioElement.src = `songs/song${songIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add("fa-circle-pause");
})