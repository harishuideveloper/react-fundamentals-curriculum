var React = require('react');
var NavBar = require('./NavBar');
var Forecast = require('./Forecast');

class App extends React.Component{
    render() {
        return(
            <div className='container'> 
                <NavBar />
                <Forecast />
            </div>
        )
    }
}

module.exports = App;