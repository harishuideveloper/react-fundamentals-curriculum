var React = require('react');
var ZipCode = require('./ZipCode');

class Forecast extends React.Component{
    render() {
        return(
            <div className="forecast-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}> 
                <h2 className='header'>Enter a City and State</h2>
                <ZipCode 
                  placeholder="Chennai, TamilNadu"
                />
            </div>
        )
    }
}

module.exports = Forecast;