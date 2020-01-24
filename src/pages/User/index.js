import React, { Component } from 'react';
import logo from '../Login/Logo.png';
import './styles.css';

export class Login extends Component {
    render() {
        return (
            <div className="flex-container">
                <div id="sidebar">
                    <aside>                    
                        <div id="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="sidenav">
                            <span>Fichas</span>
                            <span>Mesas</span>
                            <span>Something</span>
                            <span>Somesomething</span>
                            <span>Some</span>
                        </div>
                    </aside>
                </div>
                <div id="sheets">
                    
                </div>
            </div>
        )
    }
}

export default Login;
