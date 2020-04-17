function URLS() {
	function Login() {
		const URL = "https://host.hangovergaming.dk/security/api/login";
		return URL;
	}
	function User() {
		const URL = "https://host.hangovergaming.dk/security/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://host.hangovergaming.dk/security/api/info/admin";
		return URL;
	}

	function AdminData() {
		const URL = "https://host.hangovergaming.dk/security/api/fetch";
		return URL;
	}

	function Dog() {
		const URL = "https://host.hangovergaming.dk/security/api/fetch/dogpic";
		return URL;
	}
	function Cat() {
		const URL = "https://host.hangovergaming.dk/security/api/fetch/catpic";
		return URL;
	}

	return { Login, User, Admin, AdminData, Dog, Cat };
}
export default new URLS();
