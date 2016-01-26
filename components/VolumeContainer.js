import React, {Component} from 'react';
import classnames from 'classnames';
import VolumeBar from './VolumeBar';
import MuteButton from './MuteButton';

export default class VolumeContainer extends Component {
  render() {
// var showVolumeBar = this.props.hoverState ? 'volume-bar' : 'hidden' ;
    return(
      <div className="volume-container" onMouseLeave={this.props.onMouseLeave}>
        {this.props.hoverState ?
          (<div
            className="volume-bar"
            onClick={this.props.setVolume}
          >
            <VolumeBar volume={this.props.volume} />
          </div>) : null }

        <MuteButton
          onMouseEnter={this.props.onMouseEnter}
          onClick={this.props.toggleMute}
          volume={this.props.volume}/>
      </div>
    );
  }
}
