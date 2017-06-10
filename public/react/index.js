// your code here
// ES6 imports/exports are supported in this webpack setup.
import React, { Component } from "react";
import { render } from "react-dom";

import App from './App';
import NoteData from './data'

render (
  <App notes={NoteData}/>, 
  document.getElementById('app')
);