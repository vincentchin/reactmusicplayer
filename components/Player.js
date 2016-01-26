import React, {Component} from 'react';
import PlayButton from './PlayButton';
import Timeline from './Timeline';
import VolumeContainer from './VolumeContainer';
import SongName from './SongName'

export default class Player extends Component {
  render() {
    var pState = this.props.playerState;
    return(
        <div className="player">
          <div className="player-buttons">
            <PlayButton onClick={this.props.togglePlay} playing={pState.playing} />
          </div>
          <Timeline
            currentTimeDisplay={pState.currentTimeDisplay}
            setProgress={this.props.setProgress}
            progress={pState.progress}
            duration={this.props.duration}
            currentTime={this.props.currentTime}
            totalTimeDisplay={pState.totalTimeDisplay}
          />
          <VolumeContainer
            hoverState={pState.hoverState}
            onMouseLeave={this.props.onMouseLeave}
            onMouseEnter={this.props.onMouseEnter}
            setVolume={this.props.setVolume}
            volume={this.props.volume}
            toggleMute={this.props.toggleMute}
          />
          <SongName songName={this.props.songName} />
        </div>
    );
  }
}
