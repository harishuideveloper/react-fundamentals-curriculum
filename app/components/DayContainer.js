var React = require('react');
var NavBar = require('./NavBar');

const DayContainer = (props) => {
    return(
        <div className='container'>
            <NavBar />
            <div onClick={props.onClick} className='dayContainer'>
                <img 
                    src={'/app/images/weather-icons/' + props.icon + '.svg'}
                    alt='Weather'
                />
                <h2 className='subheader'>
                
                </h2>
                {props.children}
            </div>
        </div>
    )
}




module.exports = DayContainer; 