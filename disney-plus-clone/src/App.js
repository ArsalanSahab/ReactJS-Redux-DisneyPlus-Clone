import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import InfoPage from './components/InfoPage'
import LoginPage from './components/LoginPage'
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

            <Route path="/login">
                <LoginPage/>
            </Route>

            <Route path="/infopage/:id">
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
