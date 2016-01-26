import React, {Component} from 'react';
import {render} from 'react-dom';
import AudioPlayer from './AudioPlayer';

export default class App extends Component {
  render() {
    var songs = [
      {
        url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
        name: "Can't Feel My Face"
      }
    ]
    return (
      <div id='App'>
        <AudioPlayer songs={songs} />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
