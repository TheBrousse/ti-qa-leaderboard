function updateName() {
	var userName = localStorage["userName"];

	document.getElementById("userName").innerText = userName;
}

document.addEventListener('DOMContentLoaded', function () {
	updateName();
});