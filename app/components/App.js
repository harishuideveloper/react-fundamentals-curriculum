var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var NavBar = require('./NavBar');
var Home = require('./Home');
var Forecast = require('./Forecast');
var Detail = require('./Detail');

class App extends React.Component{
    render() {
        return(
            <Router>
                <div className='container'>
                    <Switch> 
                        <Route exact path='/' component={Home} />
                        <Route path='/forecast' component={Forecast} />
                        <Route path='/details/:cityName' component={Detail} />
                        <Route render = {() => <h1>Not a valid Route</h1>} />
                    </Switch>
                </div>     
            </Router>
        )
    }
}

module.exports = App;