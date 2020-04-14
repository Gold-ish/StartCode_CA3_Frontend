import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
// import { Header } from "./Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header
        // loginMsg={isLoggedIn ? "Logout" : "Login"}
        // isLoggedIn={isLoggedIn}
        />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products bookFacade={bookFacade} />
          </Route>
          <Route path="/add-book">
            <AddBook bookFacade={bookFacade} />
          </Route>
          <Route path="/find-book">
            <FindBook bookFacade={bookFacade} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/login-out">
            <Login
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
            />
          </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/find-book">
          Find Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Path does not exist</h2>
    </div>
  );
}
export default App;
