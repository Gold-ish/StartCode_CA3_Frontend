import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

export function User() {
	return (
		<div>
			{UserFetch()}
			{FetchingDog()}
			<label> VS. </label>
			{FetchingCat()}
		</div>
	);
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

function FetchingDog() {
	const [dataFromServer, setDataFromServer] = useState("Loading...");
	useEffect(() => {
		facade.fetchDog().then((data) => setDataFromServer(data.url));
	}, []);
	return <img src={dataFromServer} alt="dog" width="200" height="200" />;
}

function FetchingCat() {
	const [dataFromServer, setDataFromServer] = useState("Loading...");
	useEffect(() => {
		facade.fetchCat().then((data) => setDataFromServer(data.file));
	}, []);
	return <img src={dataFromServer} alt="cat" width="200" height="200" />;
}
