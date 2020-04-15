import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { RemoteServers } from "./RemoteServers";
import { Login } from "./Login";
import { User } from "./User";
import { Admin } from "./Admin";
import "./App.css";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const setLoginStatus = (status) => {
		setIsLoggedIn(status);
	};
	return (
		<Router>
			<div className="App">
				<Header
					loginMsg={isLoggedIn ? "Logout" : "Login"}
					isLoggedIn={isLoggedIn}
				/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/user">
						<User />
					</Route>
					<Route exact path="/admin">
						<Admin />
					</Route>
					<Route path="/remote-servers">
						<RemoteServers />
					</Route>
					<Route path="/login-out">
						<Login
							loginMsg={isLoggedIn ? "Logout" : "Login"}
							isLoggedIn={isLoggedIn}
							setLoginStatus={setLoginStatus}
						/>
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Path does not exist</h2>
		</div>
	);
}
