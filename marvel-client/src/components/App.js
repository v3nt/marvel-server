import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

import Landing from "./Landing";
import List from "./List";
import CharacterDetail from "./CharacterDetail";

import useCharacters from "../hooks/useCharacters";

const App = () => {
  const [characters] = useCharacters();

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/characters">
            <List listItems={characters} />
          </Route>
          <Route exact path="/" component={Landing} />
          <Route path="/character/:id">
            <CharacterDetail />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
