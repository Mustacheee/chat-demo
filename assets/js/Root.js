// assets/js/Root.tsx

import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';

// import Header from './components/Header'
// import HomePage from './pages'

export default class Root extends Component {
  render() {
    return (
      <ChatHistory />
    )
  }
}