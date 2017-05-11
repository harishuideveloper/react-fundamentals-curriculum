var React = require('react');
var NavBar = require('./NavBar');
var DayContainer = require('./DayContainer');
var { getCurrentWeather, getCurrentFiveDaysWeather } = require('../utils/api');
var queryString = require('query-string');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

const WeatherIcon = (props) => {
    return(
        <div className='forecast-header'>
            <h1>{props.cityName}</h1>
            <div className='forecast-container'>
            {
                props.forecast.map((list, index) => {
                    return(<DayContainer onClick = {props.onClick} key={index} list={list} icon={list.weather[0].icon}/>)
                })
            }
            </div>
        </div>
    )
}


class Forecast extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            forecast: null
        }
        this.fetchWeather = this.fetchWeather.bind(this);
        this.clickhandler = this.clickhandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.cityName = queryString.parse(nextProps.location.search).cityName;
        this.fetchWeather(this.cityName)
    }
    
    componentDidMount() {
        this.cityName = queryString.parse(this.props.location.search).cityName;
        this.fetchWeather(this.cityName)
    }

    fetchWeather(cityName) {

        this.setState(() => {
                    return{
                        loading: true,
                        forecast: null
                    }
                })

        getCurrentFiveDaysWeather(cityName)
            .then((res) => {
                this.setState(() => {
                    return{
                        loading: false,
                        forecast: res.data.list
                    }
                })
            })
            .catch(() => console.log('call failed'));
    }

    clickhandler(cityName) {
        this.props.history.push({
            pathname: '/details/' + cityName,
            state: cityName
        })
    }
    
    render() {
        let { loading } = this.state;

        if(loading === true) {
            return <p>Loading</p>
        }
        return(
            <div className='container'>
                <NavBar />
                <WeatherIcon 
                    cityName={this.cityName}
                    forecast={this.state.forecast}
                    onClick = {this.clickhandler.bind(null, this.cityName)}
                />
            </div>
        )
    }
}

module.exports = Forecast;