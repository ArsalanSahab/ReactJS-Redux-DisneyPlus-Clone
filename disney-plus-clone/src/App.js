import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Info from './components/Info'
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
    <Router>

        <Header/>
        <Switch>

            <Route path="/info">
                <Info/>
            </Route>

            <Route path="/">

                <Home/>

            </Route>

        </Switch>

    </Router>
       
    </div>
  );
}

export default App;
