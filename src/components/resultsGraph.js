import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import API from '../utils/API';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Temperature',
                        data: []
                    }
                ]
            }
        }
    }



    componentDidMount() {
        this.searchWeather(this.props.city)

    }

    searchWeather = query => {
        API.search(query)
            .then(res => this.createChartData(res.data.list))
            .catch(err => console.log(err));
    }

    createChartData = (results) => {
        let temps = [];
        let dates = [];
        for (let i = 0; i < results.length; i++) {
                temps.push(results[i].main.temp_max)
                dates.push(results[i].dt_txt)
        }
        console.log(temps)
        console.log(dates)
        this.setState({
            chartData: {
                labels: dates,
                datasets: [
                    {
                        label: 'Temperature',
                        data: temps
                    }
                ]
            }
        })
    }

    render() {
        return (
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