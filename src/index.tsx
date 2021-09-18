import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Dashboard, Home, SignIn } from './components'
import reportWebVitals from './reportWebVitals';
import './styles.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import 'firebase/auth';
import {firebaseConfig} from './firebaseConfig';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home title={'Smash City'}/>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/signin'>
            <Signin></Signin>
          </Route>

        </Switch>
      </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
