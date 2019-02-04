import React, {Component} from 'react';

class Loader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">{this.props.message}</div>
            </div>
                )
    }
}
Loader.defaultProps = {
    message: 'Loading'
}

export default Loader;
