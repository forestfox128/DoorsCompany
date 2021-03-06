import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends React.Component {

  state = {
    loggedIn: false,
    authorized: false,
    loginInfo: true,
  }

  async componentWillMount() {
    const info = await localStorage.getItem('isLogged');
    if (info === 'logged') {
      this.setState({ loggedIn: true, authorized: true });
    } else if(info === 'logout'){
      this.setState({ loggedIn: true, authorized: true });
      localStorage.removeItem('isLogged');
    } else {
      this.setState({ loggedIn: false });
      this.setState({ loginError: true });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    console.log(this.state.loggedIn);
    const renderComponent = (props) => (
      this.state.loggedIn
        ? <div><Component {...props} /></div>
        : (<Redirect to='/login' />)

    );

    return (
      this.state.authorized ?
        <Route {...rest} render={renderComponent} />
        : <div></div>
    );
  }
}

export default PrivateRoute;