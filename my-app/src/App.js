import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import Anasayfa from './components/Anasayfa';
import SiparişForm from './components/SiparişForm';
import Onay from './components/Onay';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';



function App() {


  return (

    <>
      <Router>
        <Switch>
          <Route path="/pizza" component={SiparişForm} />
          <Route exact path="/" component={Anasayfa} />
          <Route path="/onay" component={Onay} />
        </Switch>
      </Router>



    </>


  );
}

export default App;


