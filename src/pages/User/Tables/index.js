import React from 'react';

import { MdAdd } from 'react-icons/md'

import './styles.css'

export default class Tables extends React.Component {
  render() {
    return (
      <>
        <div id="tables-header">
          <h1>Mesas</h1>
          <a href="/" title="Criar mesa">
            <div>
              <MdAdd size={48} />
            </div>
          </a>
        </div>
        <div id="tables">
          <ul>
            <li>
              <a href="/">
                <div className="table">
                  <div className="table-photo"/>
                  <div className="table-info">
                    <h2>Nome da mesa</h2>
                    <h3>D<strong>&</strong>D</h3>
                    <h3>Ultímo jogo: 10/02/2020 23:37</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="table">
                  <div className="table-photo"/>
                  <div className="table-info">
                    <h2>Nome da mesa</h2>
                    <h3>D<strong>&</strong>D</h3>
                    <h3>Ultímo jogo: 10/02/2020 23:37</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="table">
                  <div className="table-photo"/>
                  <div className="table-info">
                    <h2>Nome da mesa</h2>
                    <h3>D<strong>&</strong>D</h3>
                    <h3>Ultímo jogo: 10/02/2020 23:37</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="table">
                  <div className="table-photo"/>
                  <div className="table-info">
                    <h2>Nome da mesa</h2>
                    <h3>D<strong>&</strong>D</h3>
                    <h3>Ultímo jogo: 10/02/2020 23:37</h3>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="table">
                  <div className="table-photo"/>
                  <div className="table-info">
                    <h2>Nome da mesa</h2>
                    <h3>D<strong>&</strong>D</h3>
                    <h3>Ultímo jogo: 10/02/2020 23:37</h3>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  }
}