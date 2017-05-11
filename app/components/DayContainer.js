var React = require('react');

const DayContainer = (props) => {
    return(
        <div className='container'>
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