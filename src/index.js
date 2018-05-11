import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import ExplorePage from './ExplorePage';
import SignupPage from './SignupPage';
const App = () => (
  <BrowserRouter>
    <div className='root'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route  component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
