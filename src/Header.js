import React from "react";
import { NavLink } from "react-router-dom";

export function Header({ isLoggedIn, loginMsg }) {
	return (
		<ul className="header">
			<li>
				<NavLink exact activeClassName="active" to="/">
					Home
				</NavLink>
			</li>
			{isLoggedIn && (
				<React.Fragment>
					<li>
						<NavLink activeClassName="active" to="/user">
							User
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/admin">
							Admin
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/remote-servers">
							Remote servers
						</NavLink>
					</li>
				</React.Fragment>
			)}
			<li>
				<NavLink activeClassName="active" to="/login-out">
					{loginMsg}
				</NavLink>
			</li>
		</ul>
	);
}
