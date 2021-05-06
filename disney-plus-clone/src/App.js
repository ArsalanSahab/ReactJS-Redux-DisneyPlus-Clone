import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import InfoPage from './components/InfoPage'
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

            <Route path="/infopage">
                <InfoPage/>
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
