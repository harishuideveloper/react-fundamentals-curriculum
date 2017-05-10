var React = require('react');

class NavBar extends React.Component{
    render() {
        return(
            <div className='navbar'> 
                <h1>Weather Forecast</h1>
            </div>
        )
    }
}

module.exports = NavBar;