import React, {Component} from 'react';

export default class SongName extends Component {
  render() {
    return(
      <div>
        Now Playing {this.props.songName}
      </div>
    );
  }
}
