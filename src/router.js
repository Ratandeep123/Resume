import React from "react";
import { Route } from "react-router-dom";
import App from "../src/App";
import Home from "../src/home";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home}/>
        
        {/* <Route exact path="/contact" component={Contact}/> */}
      </React.Fragment>
    );
  }
}

export default ReactRouter;
