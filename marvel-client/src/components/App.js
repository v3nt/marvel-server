//es2015 modules. import and export.

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

import Landing from "./Landing";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
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
