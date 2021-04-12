import React, {useState} from 'react';
import {NavBar} from './components/navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
import {Team} from './components/team/Team';
import { WhatWeDo } from './components/whatwedo/WhatWeDo';
import {useTranslation} from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  const setLanguage = (lang) => {
      i18n.changeLanguage(lang)
  }

  return (
    <div className="App" >
      <NavBar>
      <button onClick={() => setLanguage('en')}>
          English
      </button>
      <button onClick={() => setLanguage('nl')}>
          Dutch
      </button>
      </NavBar>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/team' component={Team}/>
        <Route path='/what-we-do' component={WhatWeDo}/>
      </Switch>
    </div>
  );
}

export default App;
