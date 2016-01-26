import React, {Component} from 'react';

export default class SongName extends Component {
  render() {
    return(
      <div className="song-name">
        Now Playing "{this.props.songName}"
      </div>
    );
  }
}
