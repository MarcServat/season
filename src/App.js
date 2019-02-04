import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';

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
    }
    if (this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>
    }

    return <Loader message="Accept location request"></Loader>

  }
}

export default App;
