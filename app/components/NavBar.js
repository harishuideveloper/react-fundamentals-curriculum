var React = require('react');
var ZipCode = require('./ZipCode');

class NavBar extends React.Component{
    render() {
        return(
            <div className='navbar'> 
                <h1>Weather Forecast</h1>
                <ZipCode 
                    placeholder="Chennai, TamilNadu"
                />
            </div>
        )
    }
}

module.exports = NavBar;