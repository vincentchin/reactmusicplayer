import React, {Component} from 'react';
import classnames from 'classnames';

export default class PlayButton extends Component {
  render() {

    var playPauseClass = classnames({
      'fa' : true,
      'fa-play': !this.props.playing,
      'fa-pause': this.props.playing
  })

    return (
      <button onClick={this.props.onClick} className="player-btn-play">
        <i className={playPauseClass}></i>
      </button>
    );
  }
}
