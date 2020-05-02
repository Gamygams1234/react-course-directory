import React from "react";
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from "./courses/JavaScript";
import { Route, Redirect, NavLink } from "react-router-dom";

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="/courses/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/courses/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/courses/javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>
    {/* This will set the default to the HTML */}

    <Route exact path="/courses" render={() => <Redirect to="/courses/html" />} />
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/javascript" component={JavaScript} />
    <Route path="/courses/css" component={CSS} />

    {/* Write routes here... */}
  </div>
);

export default Courses;
