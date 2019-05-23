import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={LoginScreen}/>
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
