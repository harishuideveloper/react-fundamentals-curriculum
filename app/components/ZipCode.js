var React = require('react');
var PropTypes = require('prop-types');

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

ZipCode.PropTypes = {
  placeholder: PropTypes.string.isRequired
}

module.exports = ZipCode;