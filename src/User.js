import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

export function User() {
	return <div>{UserFetch()}</div>;
}

function UserFetch() {
	const [dataFromServer, setDataFromServer] = useState("Loading...");
	useEffect(() => {
		facade.fetchDataUser().then((data) => setDataFromServer(data.msg));
	}, []);
	return (
		<div>
			<h2>User</h2>
			<h3>{dataFromServer}</h3>
		</div>
	);
}
