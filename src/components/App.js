import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Teachers from "./Teachers";
import About from "./About";
import Courses from "./Courses";
import NotFound from "./NotFound";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* we can use the render method to pass on props to the page */}
        <Route path="/about" render={() => <About title="About" />} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
