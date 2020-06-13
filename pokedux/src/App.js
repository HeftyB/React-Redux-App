import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import Home from "./components/Home";
import Results from "./components/Results";
import Name from "./components/Results//Name";
import Version from "./components/Results/Version";
import Reigion from "./components/Results/Reigion";
import Pokedex from "./components/Results/Pokedex";
import Location from "./components/Results/Location";
import Generation from "./components/Results/Generation";
import Mons from "./components/Results/Mons";
import Pokemon from "./components/Results/Pokemon"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route exact path={`/`}>
            <Home/>
          </Route>
          <Route path={`/Results`}>
            <Results/>
          </Route>
          <Route path={`/pokemon`}>
            {/* <Pokemon/> */}
            <Name/>
          </Route>
          <Route path={`/version`}>
            <Version/>
          </Route>
          <Route path={`/reigion`}>
            <Reigion/>
          </Route>
          <Route path={`/pokedex`}>
            <Pokedex/>
          </Route>
          <Route path={`/location`}>
            <Location/>
          </Route>
          <Route path={`/generation`}>
            <Generation/>
          </Route>
          <Route path={`/Mons`}>
            <Mons/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
