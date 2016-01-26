import React, {Component} from 'react';
import classnames from 'classnames';

export default class MuteButton extends Component {
  render() {

    var volumeToggleClass = classnames({
    'fa' : true,
    'fa-volume-up': this.props.volume >= 0.7,
    'fa-volume-down': (1 > this.props.volume) && (this.props.volume > 0),
    'fa-volume-off': this.props.volume === 0
    })

    return (
      <button
        onMouseEnter={this.props.onMouseEnter}
        onClick={this.props.onClick}
        className="player-btn-volume"
      >
        <i className={volumeToggleClass}></i>
      </button>
    );
  }
}
