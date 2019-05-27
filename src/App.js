import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {IntlProvider} from "react-intl";
import PrivateRoute from './services/PrivateRoute';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import Toolbar from './Components/Toolbar/Toolbar';
import './App.css';

import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_pl from 'react-intl/locale-data/pl';
import messages_pl from "./translations/pl.json";
import messages_en from "./translations/en.json";

addLocaleData([...locale_en, ...locale_pl]);

const messages = {
  'pl': messages_pl,
  'en': messages_en
};

class App extends React.Component {

  state = {
    selectValue: 'en'
  }

  handleSelectChange = (event) => {
    console.log(event.target.value)
    this.setState({selectValue: event.target.value});
  }

  render() {
  return (
    <IntlProvider locale={this.state.selectValue} messages={messages[this.state.selectValue]}>
    <div className="App">
    <Toolbar value={this.state.selectValue} onChange={this.handleSelectChange}/>
      <Router>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <PrivateRoute path='/home' component={HomeScreen} />
        </Switch> 
      </Router> 
    </div>
    </IntlProvider>
  );
  }
}

export default App;
