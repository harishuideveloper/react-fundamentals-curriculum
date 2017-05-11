var React = require('react');
var DayContainer = require('./DayContainer');

class Detail extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div className='container'>
        <DayContainer />
        <div className='description-container'>
          <p>{props}</p>
        </div>
      </div>
    )
  }
}

module.exports = Detail;