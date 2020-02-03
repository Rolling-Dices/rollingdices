import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import { MdAccountCircle } from 'react-icons/md';
import grid from './grid.jpg';

export default class Table extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="game-table">
          <div id="table-tools">
            <span><MdAccountCircle size={40} /></span>
            <span><MdAccountCircle size={40} /></span>
            <span><MdAccountCircle size={40} /></span>
            <span><MdAccountCircle size={40} /></span>
          </div>
          <div id="table-map">
            <img src={grid} alt="map" />
          </div>
          <div id="table-chat">
            <input type="text" />
          </div>
          <button>Submit</button>
        </div>
      </>
    );
  }
}


