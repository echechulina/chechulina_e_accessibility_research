// video
const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');
const player = document.querySelector('video');


playPauseBtn.onclick = function() {
    if(player.paused) {
      player.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      player.pause();
      playPauseBtn.textContent = 'Play';
    }
  };

  stopBtn.onclick = function() {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
  };

  rwdBtn.onclick = function() {
    player.currentTime -= 3;
  };
  
  fwdBtn.onclick = function() {
    player.currentTime += 3;
    if(player.currentTime >= player.duration || player.paused) {
      player.pause();
      player.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
  };

  player.ontimeupdate = function() {
    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime - minutes * 60);
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
    timeLabel.textContent = mediaTime;
  };


const playPauseBtn1 = document.querySelector('.playpause1');
const stopBtn1 = document.querySelector('.stop1');
const rwdBtn1 = document.querySelector('.rwd1');
const fwdBtn1 = document.querySelector('.fwd1');
const timeLabel1 = document.querySelector('.time1');
const player1 = document.querySelector('#video-1');


// tv
playPauseBtn1.onclick = function() {
    if(player1.paused) {
      player1.play();
      playPauseBtn1.textContent = 'Pause';
    } else {
      player1.pause();
      playPauseBtn1.textContent = 'Play';
    }
  };

  stopBtn1.onclick = function() {
    player1.pause();
    player1.currentTime = 0;
    playPauseBtn1.textContent = 'Play';
  };

  rwdBtn1.onclick = function() {
    player1.currentTime -= 3;
  };
  
  fwdBtn1.onclick = function() {
    player1.currentTime += 3;
    if(player1.currentTime >= player1.duration || player1.paused) {
      player1.pause();
      player1.currentTime = 0;
      playPauseBtn1.textContent1 = 'Play';
    }
  };

  player1.ontimeupdate = function() {
    let minutes = Math.floor(player1.currentTime / 60);
    let seconds = Math.floor(player1.currentTime - minutes * 60);
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
  
    mediaTime = minuteValue + ":" + secondValue1;
    timeLabel.textContent = mediaTime;
  };

// audio

const playPauseBtn2 = document.querySelector('.playpause2');
const stopBtn2 = document.querySelector('.stop2');
const rwdBtn2 = document.querySelector('.rwd2');
const fwdBtn2 = document.querySelector('.fwd2');
const timeLabel2 = document.querySelector('.time2');

const player2 = document.querySelector('audio');

// Remove the native controls from all players

player2.removeAttribute('controls');

// Define constructor for player controls object

playPauseBtn2.onclick = function() {
  if(player2.paused) {
    player2.play();
    playPauseBtn2.textContent = 'Pause';
  } else {
    player2.pause();
    playPauseBtn2.textContent = 'Play';
  }
};

stopBtn2.onclick = function() {
  player2.pause();
  player2.currentTime = 0;
  playPauseBtn2.textContent = 'Play';
};

rwdBtn2.onclick = function() {
  player2.currentTime -= 3;
};

fwdBtn2.onclick = function() {
  player2.currentTime += 3;
  if(player2.currentTime >= player2.duration || player2.paused) {
    player2.pause();
    player2.currentTime = 0;
    playPauseBtn2.textContent = 'Play';
  }
};

player2.ontimeupdate = function() {
  let minutes = Math.floor(player2.currentTime / 60);
  let seconds = Math.floor(player2.currentTime - minutes * 60);
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
  timeLabel2.textContent = mediaTime;
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