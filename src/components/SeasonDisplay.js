import React, {Component} from 'react';
import './SeasonDisplay.css';

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

  render() {
    const season = this.getSeason();
    return (
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${this.seasonConf[season].iconName} icon`} />
          Season Display: <h1>{this.seasonConf[season].text}</h1>
          <i className={`icon-right massive ${this.seasonConf[season].iconName} icon`} />
        </div>
    );
  }
}

export default SeasonDisplay;
