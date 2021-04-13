import React from 'react';
import {NavBar} from './components/navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
import {Team} from './components/team/Team';
import { WhatWeDo } from './components/whatwedo/WhatWeDo';

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/team' component={Team}/>
        <Route path='/what-we-do' component={WhatWeDo}/>
      </Switch>
    </div>
  );
}

export default App;
