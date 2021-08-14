import React, { useState } from 'react'
import logo from './logo.svg'
import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-icon-button";
import './App.scss';
import './AppDocumentStyles.scss';
import {TodoList} from "./features/todoList/TodoList";
import {DoneList} from "./features/doneList/DoneList";

function App() {
  
  const toggleTheme = () => {
    document.querySelector("html")?.classList.toggle("dark-theme");
  };
  

  return (
    <div className="App">
      <mwc-top-app-bar-fixed>
        <div slot="navigationIcon">
          <img src={logo} className="app-logo" alt="logo" height="32"/>
        </div>
        <div slot="title">
          TODO <span>- CONNECT.TECH</span>
        </div>
        <div slot="actionItems">          
          <mwc-icon-button
            icon="settings_brightness"  
            onClick={toggleTheme}
          ></mwc-icon-button>
        </div>
      </mwc-top-app-bar-fixed>
      <div className="content-body">
        {TodoList()}
        {DoneList()}
        {/* <ctn-todo-content .state="${this.state}"></ctn-todo-content>
        <ctn-done-content .state="${this.state}"></ctn-done-content>
        <ctn-images-list .state="${this.state}"></ctn-images-list> */}
      </div>
    </div>
  )
}

export default App
