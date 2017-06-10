import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: {},
      allNots: {}
    };
    this.getNotesFromServer = this.getNotesFromServer.bind(this);
  }

  getNotesFromServer() {
    axios.get('/getAllNotes')
    //   method: 'get',
    //   url: '/getAllNotes'
    // })
    .then(function(response) {
      console.log('response from Axios = ', response);
    })
  }
  
  componentDidMount() {
    this.getNotesFromServer();
  }

  render() {
    return (
      <div> 
        Test react App rendering
      </div>
    );
  }
}