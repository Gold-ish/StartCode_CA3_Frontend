import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

export function Admin() {
	return <div>{AdminFetch()}</div>;
}

function AdminFetch() {
	const [dataFromServer, setDataFromServer] = useState("Loading...");
	useEffect(() => {
		facade.fetchDataAdmin().then((data) => setDataFromServer(data.msg));
	}, []);
	return (
		<div>
			<h2>Admin</h2>
			<h3>{dataFromServer}</h3>
		</div>
	);
}
