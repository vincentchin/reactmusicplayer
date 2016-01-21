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
      <i className={playPauseClass}></i>
    );
  }
}
