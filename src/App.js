import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from './services/PrivateRoute';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <PrivateRoute path='/home' component={HomeScreen} />
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
