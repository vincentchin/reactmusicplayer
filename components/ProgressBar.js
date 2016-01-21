import React, {Component} from 'react';

export default class ProgressBar extends Component {
  render() {

    var style = { width: this.props.progress + '%'};

    return (
      <span
        className="player-progress-value"
        style={style}
      >
      </span>
    );
  }
}
