import React from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

// User pages
import Tables from './Tables'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles.css';

function Main() {
  return(
    <h1>Main</h1>
  )
}

export class User extends React.Component {
  state = {
    user: {},
  }

  async componentDidMount() {
    const { slug } = this.props.match.params

    const response = await api.get(`/users/show/${slug}`);

    this.setState({ user: response.data });

    console.log(this.state)
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Header />
        <div id="user">
          <div id="user-info">
            <div id="user-photo">
              <img src="https://api.adorable.io/avatars/285/roldivngdices-profile.png" alt=""/>
            </div>
            <div id="user-profile">
              <h1>{ user.username }</h1>
            </div>
            <div id="user-options">
                <div>
                  <a href="/user">Inicio</a>
                </div>
                <div>
                  <a href="/user/tables">Perfil</a>
                </div>
                <div>
                  <a href="/user/tables">Fichas</a>
                </div>
                <div>
                  <a href="/user/tables">Mesas</a>
                </div>
                <div>
                  <a href="/user/tables">Sair</a>
                </div>
            </div>
          </div>
          <div id="user-main">
            <BrowserRouter>
              <Switch>
                <Route exact path='/user' component={Main} />
                <Route path='/user/tables' component={Tables} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </>
    )
  }
}

export default User;