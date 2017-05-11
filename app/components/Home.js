var React = require('react');
var NavBar = require('./NavBar');
var ZipCode = require('./ZipCode');

class Home extends React.Component{
  render() {
        return(
            <div className='container'> 
                <NavBar />
                <div className="forecast-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}> 
                  <h2 className='header'>Enter a City and State</h2>
                  <ZipCode 
                    placeholder="Chennai, TamilNadu"
                  />
              </div>
            </div>
        )
    }
}

module.exports = Home;