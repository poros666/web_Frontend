import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { mainRoutes } from './routes/index'
//import { adminRoutes } from './routes/index'
import AdminIndex from './pages/admin/adminIndex'
import MessageIndex from './pages/message/messageIndex'
import PersonalSpace from './pages/personal/personalSpace'
import { isLogined } from "./utils/auth"

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps)=>(isLogined()?(<AdminIndex {...routeProps} />):(<Redirect to="/login"/>))}/>
      <Route path="/message" render={routeProps=><MessageIndex {...routeProps} />}/>
      <Route path="/personal/account=:account" render={props=><PersonalSpace {...props} />}/>
      {mainRoutes.map(route=>{
        return <Route key={route.path} {...route}/>
      })}
      <Redirect to="/home"/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
