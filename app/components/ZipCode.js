var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class ZipCode extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      cityName: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let city = e.target.value;
    this.setState(() => {
      return {
        cityName: city
      }
    })
  }

  render() {
    
    let cityName = this.state.cityName;
    let match = this.props.match;

    return(
      <div className='zipcode-container'>
        <input 
          type='text'
          className='form-control'
          placeholder={this.props.placeholder}
          value={this.state.cityName}
          onChange = {this.onChange}
        />
        <Link
          className='btn btn-success'
          to={{
            pathname: '/forecast',
            search: '?cityName=' + cityName
          }}
          >Get Weather</Link>
      </div>
    )
  }
}

ZipCode.PropTypes = {
  placeholder: PropTypes.string.isRequired
}

module.exports = ZipCode;