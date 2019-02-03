import React, {Component} from 'react';

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
    this.seasonConf = {
      summer: {
        text: 'let\'s go to the beach',
        iconName: 'sun'
      },
      winter: {
        text: 'WOW, let\'s go climbing',
        iconName: 'snowflake'
      }
    }
  }

  getSeason() {
    const month = new Date().getMonth();
    if(month > 2 && month < 9) {
      return this.props.lat > 0 ? 'summer' : 'winter';
    } else {
      return this.props.lat > 0 ? 'winter' : 'summer';
    }
  }

  getText() {
    const season = this.getSeason();
    return this.seasonConf[season];
  }

  render() {
    return (
        <div>
          <i className={`massive ${this.getText().iconName} icon`} />
          Season Display: <h1>{this.getText().text}</h1>
        </div>
    );
  }
}

export default SeasonDisplay;