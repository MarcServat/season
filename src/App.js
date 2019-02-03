import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        pos => this.setState({lat: pos.coords.latitude}),
        err => this.setState({errMsg: err.message})
    )
  }

  render() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <div>Error: {this.state.errMsg}</div>
    }
  }
}

export default App;
