import URLS from "./Settings";

function handleHttpErrors(res) {
	if (!res.ok) {
		return Promise.reject({ status: res.status, fullError: res.json() });
	}
	return res.json();
}

function apiFacade() {
	/* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

	const setToken = (token) => {
		localStorage.setItem("jwtToken", token);
	};
	const getToken = () => {
		return localStorage.getItem("jwtToken");
	};
	const loggedIn = () => {
		const loggedIn = getToken() != null;
		return loggedIn;
	};
	const logout = () => {
		localStorage.removeItem("jwtToken");
	};

	const login = (user, password, setUsername, setRoles) => {
		const options = makeOptions("POST", true, {
			username: user,
			password: password,
		});
		return fetch(URLS.Login(), options)
			.then(handleHttpErrors)
			.then((res) => {
				setToken(res.token);
				setUsername(res.username);
				setRoles(res.role);
				console.log(res.role);
			});
	};
	const fetchDataUser = () => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URLS.User(), options).then(handleHttpErrors);
	};
	const fetchDataAdmin = () => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URL, options).then(handleHttpErrors);
	};
	const fetchInfoData = () => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URL, options).then(handleHttpErrors);
	};
	const fetchDog = () => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URL, options).then(handleHttpErrors);
	};
	const fetchCat = () => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URL, options).then(handleHttpErrors);
	};

	const fetchData = (URL) => {
		const options = makeOptions("GET", true); //True add's the token
		return fetch(URL, options).then(handleHttpErrors);
	};

	const makeOptions = (method, addToken, body) => {
		var opts = {
			method: method,
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
		};
		if (addToken && loggedIn()) {
			opts.headers["x-access-token"] = getToken();
		}
		if (body) {
			opts.body = JSON.stringify(body);
		}
		return opts;
	};
	return {
		makeOptions,
		setToken,
		getToken,
		loggedIn,
		login,
		logout,
		fetchDataUser,
		fetchDataAdmin,
		fetchInfoData,
		fetchDog,
		fetchCat,
		fetchData,
	};
}
const facade = apiFacade();
export default facade;
