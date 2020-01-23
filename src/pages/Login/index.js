import React from 'react';
import StandardAlert from '../../components/Alerts/StandardAlert';

import logo from './Logo.png'

import './styles.css';

export default class Login extends React.Component{

  render() {
    return (
      <div>
        <div id="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div id="login">
          <form action="">
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email" 
                id="email" 
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input 
                type="password"
                name="password" 
                id="password" 
                required
              />
            </div>
            <div className="input-group">
              <input 
                type="checkbox"
                name="checkbox" 
                id="checkbox" 
              />
              <label htmlFor="password">Lembrar senha ?</label>
            </div>
            <button type="submit" onSubmit={this.handleClick}>Entrar</button>
            <label>Ou</label>
            <button href="/login">Cadastre-se</button>
          </form>
        </div>
        <StandardAlert />
      </div>
    );
  }
}