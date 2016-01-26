import React, {Component} from 'react';
import classnames from 'classnames';
import ProgressBar from './ProgressBar';

export default class Timeline extends Component {
  render() {
    return(
      <div className="timeline">
        <div className="current-time">{this.props.currentTimeDisplay}</div>
        <div className="player-progress-container" onClick={this.props.setProgress}>
          <ProgressBar progress={this.props.progress} currentTime={this.props.currentTime} duration={this.props.duration} />
        </div>
        <div className="total-time">{this.props.totalTimeDisplay}</div>
      </div>
    );
  }
}

