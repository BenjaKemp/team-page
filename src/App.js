import React, { Component } from 'react';
import Banner from './components/Banner';
import './styles/styles.scss'
import 'normalize.css';

import TeamPage from './containers/TeamPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <TeamPage/>
      </div>
    );
  }
}

export default App;
