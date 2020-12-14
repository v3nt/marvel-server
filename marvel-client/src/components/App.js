import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

import Landing from "./Landing";
import List from "./List";
import CharacterDetail from "./CharacterDetail";

import useCharacters from "../hooks/useCharacters";

const App = () => {
  // const [characters, setCharacters] = useState([]);
  const [characters] = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    setSelectedCharacter();
  }, [characters]);

  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <div>
            <Header />
            <Route path="/Characters">
              <List
                listItems={characters}
                onVideoSelect={setSelectedCharacter}
              />
            </Route>
            <Route exact path="/" component={Landing} />
            <Route exact path="/character/detail/:id">
              <CharacterDetail />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
