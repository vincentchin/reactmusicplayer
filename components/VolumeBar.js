import React, {Component} from 'react';

export default class VolumeBar extends Component {
  render() {

  var style = { height: (this.props.volume * 100) + '%'}

    return (
      <span
        className="player-volume-value"
        style={style}
      >
      </span>
    );
  }
}
