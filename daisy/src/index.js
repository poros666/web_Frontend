import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Community from './pages/community/Community';
import ReadPost from './pages/community/ReadPost'

ReactDOM.render(
  <React.StrictMode>
    <ReadPost />
  </React.StrictMode>,
=======
import App from './App';
import * as serviceWorker from './serviceWorker'
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { mainRoutes } from './routes/index'
import { adminRoutes } from './routes/index'
import AdminIndex from './pages/admin/adminIndex';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={routeProps=><AdminIndex {...routeProps} />}/>
      {mainRoutes.map(route=>{
        return <Route key={route.path} {...route}/>
      })}
      <Redirect to="/404"/>
    </Switch>
  </Router>,
>>>>>>> cfe0ac5eda60f4ddf3140623aec71881da60db56
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
