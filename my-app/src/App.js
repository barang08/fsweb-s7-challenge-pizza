import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import Anasayfa from './components/Anasayfa';
import SiparişForm from './components/SiparişForm';
import Onay from './components/Onay';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';






function App() {
  const history = useHistory()



  return (

    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow:300,400,500,600,700&display=swap"></link>


      <link
        href="https://fonts.googleapis.com/css2?family=Barlow&family=Londrina+Solid:wght@300&family=Quattrocento:wght@700&family=Bebas+Neue&family=Chelsea+Market&family=Roboto&family=Roboto+Mono&family=Satisfy&display=swap"
        rel="stylesheet">
      </link>
      <Router>
        <Switch>
          <Route path="/pizza"  >
            <SiparişForm />
          </Route>
          <Route exact path="/"  >
            <Anasayfa />
          </Route>
          <Route path="/onay"  >
            <Onay />
          </Route>

        </Switch>
      </Router>



    </>


  );
}

export default App;


