import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
    state = {
        chartData: {
            labels: [],
            datasets:[
                {
                    label: '',
                    data: []
                }
            ]
        }
    }
    render(){
        return(
            <div className='chart'>
                <Line 
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart;