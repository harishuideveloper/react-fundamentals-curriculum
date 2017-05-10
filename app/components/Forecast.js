var React = require('react');

class ZipCode extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='zipcode-container'>
        <input 
          type='text'
          className='form-control'
          placeholder={this.props.placeholder}
          value=''
        />
        <button
          className='btn btn-success'
          type='button'
          >Get Weather</button>
      </div>
    )
  }
}

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