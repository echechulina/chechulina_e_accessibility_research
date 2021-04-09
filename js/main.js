// video
const playPauseBtnVO = document.querySelector('.playpause-vo-btn');
const stopBtnVO = document.querySelector('.stop-vo-btn');
const rwdBtnVO = document.querySelector('.rwd-vo-btn');
const fwdBtnVO = document.querySelector('.fwd-vo-btn');
const timeLabelVO = document.querySelector('.time-vo-btn');
const playerVO = document.querySelector('#videoOne');
const fscVO = document.querySelector('.fsc-vo-btn');
const volumeVO = document.querySelector('.volume-vo-btn');

const btnsubtitlesVO = document.querySelector('.subtitles-vo-btn');

const subtitlesVO  = playerVO.textTracks[0]; 
subtitlesVO.mode = 'hidden';

// subtitles
btnsubtitlesVO.onclick = function(){
    subtitlesVO.mode = 'showing';
}

// open full screen
fscVO.onclick = function (){
    if(playerVO.requestFullscreen){
        playerVO.requestFullscreen();
    }
}

// volume doesn't work properly
volumeVO.onclick = function () {
    playerVO.volume = volumeVO.value / volumeVO.max;
  };


playPauseBtnVO.onclick = function() {
    if(playerVO.paused) {
      playerVO.play();
      playPauseBtnVO.textContent = 'Pause';
    } else {
      playerVO.pause();
      playPauseBtnVO.textContent = 'Play';
    }
  };

  stopBtnVO.onclick = function() {
    playerVO.pause();
    playerVO.currentTime = 0;
    playPauseBtnVO.textContent = 'Play';
  };

  rwdBtnVO.onclick = function() {
    playerVO.currentTime -= 3;
  };
  
  fwdBtnVO.onclick = function() {
    playerVO.currentTime += 3;
    if(playerVO.currentTime >= playerVO.duration || playerVO.paused) {
      playerVO.pause();
      playerVO.currentTime = 0;
      playPauseBtnVO.textContent = 'Play';
    }
  };

  playerVO.ontimeupdate = function() {
    let minutes = Math.floor(playerVO.currentTime / 60);
    let seconds = Math.floor(playerVO.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes<10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds<10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    mediaTime = minuteValue + ":" + secondValue;
    timeLabelVO.textContent = mediaTime;
  };

 

// tv
const playPauseBtnVT = document.querySelector('.playpause-vt-btn');
const stopBtnVT = document.querySelector('.stop-vt-btn');
const rwdBtnVT = document.querySelector('.rwd-vt-btn');
const fwdBtnVT = document.querySelector('.fwd-vt-btn');
const timeLabelVT = document.querySelector('.time-vt-btn');
const playerVT = document.querySelector('#videoTwo');
const fscVT = document.querySelector('.fsc-vt-btn');
const volumeVT = document.querySelector('.volume-vt-btn');

const btnsubtitlesVT = document.querySelector('.subtitles-vt-btn');

const subtitlesVT  = playerVT.textTracks[0]; 
subtitlesVT.mode = 'hidden';

btnsubtitlesVT.onclick = function(){
    subtitlesVT.mode = 'showing';
}


fscVT.onclick = function (){
    if(playerVT.requestFullscreen){
        playerVT.requestFullscreen();
    }
}


// volume doesn't work properly
volumeVT.onclick = function () {
    playerVT.volume = volumeVT.value / volumeVT.max;
  };



playPauseBtnVT.onclick = function() {
    if(playerVT.paused) {
      playerVT.play();
      playPauseBtnVT.textContent = 'Pause';
    } else {
      playerVT.pause();
      playPauseBtnVT.textContent = 'Play';
    }
  };

  stopBtnVT.onclick = function() {
    playerVT.pause();
    playerVT.currentTime = 0;
    playPauseBtnVT.textContent = 'Play';
  };

  rwdBtnVT.onclick = function() {
    playerVT.currentTime -= 3;
  };
  
  fwdBtnVT.onclick = function() {
    playerVT.currentTime += 3;
    if(playerVT.currentTime >= playerVT.duration || playerVT.paused) {
      playerVT.pause();
      playerVT.currentTime = 0;
      playPauseBtnVT.textContent1 = 'Play';
    }
  };

  playerVT.ontimeupdate = function() {
    let minutes = Math.floor(playerVT.currentTime / 60);
    let seconds = Math.floor(playerVT.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes<10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds<10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    mediaTime = minuteValue + ":" + secondValue;
    timeLabelVT.textContent = mediaTime;
  };

  
// audio

const playPauseBtnAU = document.querySelector('.playpause-au-btn');
const stopBtnAU = document.querySelector('.stop-au-btn');
const rwdBtnAU = document.querySelector('.rwd-au-btn');
const fwdBtnAU = document.querySelector('.fwd-au-btn');
const timeLabelAU = document.querySelector('.time-au-btn');
const playerAU = document.querySelector('#audioPlayer');
const volumeAU = document.querySelector('.volume-au-btn');

// volume doesn't work properly
volumeAU.onclick = function () {
    playerAU.volume = volumeAU.value / volumeAU.max;
  };



playPauseBtnAU.onclick = function() {
  if(playerAU.paused) {
    playerAU.play();
    playPauseBtnAU.textContent = 'Pause';
  } else {
    playerAU.pause();
    playPauseBtnAU.textContent = 'Play';
  }
};

stopBtnAU.onclick = function() {
  playerAU.pause();
  playerAU.currentTime = 0;
  playPauseBtnAU.textContent = 'Play';
};

rwdBtnAU.onclick = function() {
  playerAU.currentTime -= 3;
};

fwdBtnAU.onclick = function() {
  playerAU.currentTime += 3;
  if(playerAU.currentTime >= playerAU.duration || playerAU.paused) {
    playerAU.pause();
    playerAU.currentTime = 0;
    playPauseBtnAU.textContent = 'Play';
  }
};

playerAU.ontimeupdate = function() {
  let minutes = Math.floor(playerAU.currentTime / 60);
  let seconds = Math.floor(playerAU.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes<10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds<10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  mediaTime = minuteValue + ":" + secondValue;
  timeLabelAU.textContent = mediaTime;
};

// Control transcript display

const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-container button');

transcriptBtn.onclick = function() {
  if(transcriptBtn.textContent === 'Show transcript') {
    transcript.style.height = '150px';
    transcriptBtn.textContent = 'Hide transcript';
  } else {
    transcript.style.height = '0';
    transcriptBtn.textContent = 'Show transcript';
  }
};

