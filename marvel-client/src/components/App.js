import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

// import Landing from "./Landing";
import List from "./List";

import useCharacters from "../hooks/useCharacters";

const App = () => {
  const [characters] = useCharacters();

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route
            path="/"
            exact
            component={List}
            characters={characters}
            onCharacterSelect={() => console.log("selected")}
          />
          {/* 
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/surveys" component={SurveyList} />
          <Route path="/surveys/new" component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

// export default connect(null, actions)(App);
export default App;
