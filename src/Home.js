import React from "react";

export function Home() {
	return (
		<div>
			<h2>Home</h2>
			<p>
				Make sure to follow both instructions for the frontend and the backend
				:)
			</p>

			<p>
				Link to backend github:{" "}
				<a href="https://github.com/Gold-ish/StartCode_CA3_Backend">
					Backend setup
				</a>
			</p>
			<p>
				Link to frontend github:{" "}
				<a href="https://github.com/Gold-ish/StartCode_CA3_Frontend">
					Frontend setup
				</a>
			</p>
			<br />
			<p>
				To login as user or admin, use the following usernames and password:
			</p>
			<p>Username: admin, password: test1</p>
			<p>Username: user1, password: test123</p>
			<p>Username: user2, password: test123</p>
			<p>Username: user3, password: test123</p>
		</div>
	);
}
