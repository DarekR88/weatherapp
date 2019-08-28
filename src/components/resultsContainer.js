import React, { Component } from 'react';
import Chart from './resultsGraph';

class Container extends Component {
    state = {
        city: 'Houston'
    }

    render() {
        return (
            <div>
                <h1>Five Day Forecast for {this.state.city}</h1>
                <Chart city={this.state.city}/>
            </div>
        )
    }

}

export default Container;