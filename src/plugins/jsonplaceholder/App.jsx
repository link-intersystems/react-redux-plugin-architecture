import React from "react";
import "./styles.css";
import { Navigation } from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Users } from "./Users";
import { Comments } from "./Comments";
import { Posts } from "./Posts";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
