import React, {Component} from 'react';

import PlayButton from './PlayButton';
import MuteButton from './MuteButton';
import ProgressBar from './ProgressBar';
import VolumeBar from './VolumeBar';

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);

    this.bindEventHandlers();
    this.initializeState();
  }

  bindEventHandlers() {
    //ES6 does not auto-bind anymore
    this.updateProgress = this.updateProgress.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.hoverVolume = this.hoverVolume.bind(this);
    this.noShow = this.noShow.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.resetSong = this.resetSong.bind(this);
  }

  initializeState() {
    this.state = {
      active: this.props.songs[0],
      songs: this.props.songs,
      progress: 0,
      playing: false,
      totalTimeDisplay: "",
      currentTimeDisplay: "0:00",
      volume: 1.0,
      preVolumeValue: 0,
      hoverState: false
    }
  }

  componentWillMount() {
    //Read it was good to use self in replacement of this
    var self = this;
    self.audio = document.createElement('audio');
    self.audio.src = self.state.active.url;
    self.audio.autoplay = !!self.props.autoplay;

    this.audio.addEventListener('timeupdate', self.getDuration);
    this.audio.addEventListener('timeupdate', self.updateProgress);
    this.audio.addEventListener('timeupdate', self.updateTime);
    this.audio.addEventListener('ended', self.resetSong);
  }


  /* ProgressBar Functions */

  updateProgress() {
    let duration = this.audio.duration;
    let currentTime = this.audio.currentTime;
    let progress = (currentTime * 100) / duration;

    this.setState({
      progress: progress
    });
  }

  setProgress(e) {
    let target = e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
    let width = target.clientWidth;
    let rect = target.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let duration = this.audio.duration;
    let currentTime = (duration * offsetX) / width;
    let progress = (currentTime * 100) / duration;

    this.setState({
      progress: progress
    });

    this.audio.currentTime = currentTime;
  }

  /* Time Functions */
  getDuration() {
    let duration = Math.floor(this.audio.duration);

    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    let totalTimeDisplay = minutes + ":" + seconds;

    this.setState({
      totalTimeDisplay: totalTimeDisplay
    });
  }

  updateTime() {
    let currentTime = Math.floor(this.audio.currentTime);
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    let currentTimeDisplay = minutes + ":" + seconds;

    this.setState({
      currentTimeDisplay: currentTimeDisplay
    });
  }

  /* VolumeBar Functions */

  setVolume(e) {
    let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
    let height = target.clientHeight;
    let rect = target.getBoundingClientRect();
    let offsetY = e.clientY - rect.top;
    let newVolume = (1 - (offsetY / height) );

    this.setState({
      volume: this.audio.volume
    })

    this.audio.volume = newVolume;
  }

  toggleMute() {
    let currentVolume = this.audio.volume;
    let volume = currentVolume === 0 ? (this.state.preVolumeValue) : 0;

    this.setState({
      preVolumeValue: currentVolume,
      volume: volume
    });

    this.audio.volume = volume;
  }

  hoverVolume() {
    this.setState({
      hoverState: !this.state.hoverState
    })
  }

  noShow() {
    this.setState({
      hoverState: false
    })
  }
  /* PlayerControl Functions */

  play() {
    this.setState({
      playing: true
    });

    this.audio.play();
  }

  pause() {
    this.setState({
      playing: false
    });

    this.audio.pause();
  }

  togglePlay() {
    (this.state.playing) ? this.pause() : this.play();
  }

  resetSong() {
    this.setState({
      playing: false
    });

    this.audio.currentTime = 0;
    this.audio.pause();
  }

  render() {

    var showVolumeBar = this.state.hoverState ? 'volume-bar' : 'hidden' ;
    var showPlayer = this.state.playing ? 'player-container' : 'hidden';

    return (

      <div>
        <button onClick={this.togglePlay} className="player-btn-play">
          <PlayButton playing={this.state.playing} />
        </button>

        <div className={showPlayer}>
          <div className="player">

            <div className="player-buttons">
              <button onClick={this.togglePlay} className="player-btn-play">
                <PlayButton playing={this.state.playing} />
              </button>
            </div>

            <div className="timeline">
              <div className="current-time">{this.state.currentTimeDisplay}</div>
              <div className="player-progress-container" onClick={this.setProgress}>
                <ProgressBar progress={this.state.progress} currentTime={this.audio.currentTime} duration={this.audio.duration} />
              </div>
              <div className="total-time">{this.state.totalTimeDisplay}</div>
            </div>

            <div className="volume-container" onMouseLeave={this.noShow}>
              <div className={showVolumeBar} onClick={this.setVolume}>
                <VolumeBar volume={this.audio.volume} />
              </div>
              <button onClick={this.toggleMute} onMouseEnter={this.hoverVolume} className="player-btn-volume">
                <MuteButton volume={this.audio.volume}/>
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


