import React, { useState } from 'react'
import logo from './logo.svg'
import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-icon-button";
import './App.scss';
import './AppDocumentStyles.scss';
import {TodoList} from "./features/todoList/TodoList";
import {DoneList} from "./features/doneList/DoneList";
import {ImageList} from "./features/imageList/ImageList";

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
        {ImageList()}
      </div>
    </div>
  )
}

export default App
