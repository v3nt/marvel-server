import React from "react";
import { Router, Route, Switch } from "react-router-dom";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

import Landing from "./Landing";
import List from "./List";
import CharacterDetail from "./CharacterDetail";

// import useCharacters from "../hooks/useCharacters";

import history from "../utils/history";

const App = () => {
  // const [characters] = useCharacters();

  return (
    <div className="container-app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/characters">
            <List />
          </Route>
          <Route exact path="/characters/page/:pageNumberUrl">
            <List />
          </Route>
          <Route exact path="/" component={Landing} />
          <Route path="/character/:id">
            <CharacterDetail />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
