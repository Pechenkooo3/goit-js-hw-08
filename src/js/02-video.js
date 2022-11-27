import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data);
  }, 1000)
);

player.on('timeupdate', function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
// seconds = currentTime;
