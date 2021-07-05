
import './App.css';
import Barra from './components/Barra';
// import Layout from './components/Layout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/Index.js'
import Login from './components/Login.js'


const App = ()=> {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
