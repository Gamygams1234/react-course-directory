import React from "react";
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from "./courses/JavaScript";
import { Route, Redirect, NavLink } from "react-router-dom";

const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
        </li>
      </ul>
    </div>
    {/* This will set the default to the HTML */}

    <Route exact path={match.path} render={() => <Redirect to={`${match.path}/html`} />} />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
    <Route path={`${match.path}/css`} component={CSS} />

    {/* Write routes here... */}
  </div>
);

export default Courses;
