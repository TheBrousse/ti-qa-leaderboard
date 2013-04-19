function updateName() {
	var userName = localStorage["userName"];

	var nameSpan = document.getElementById("userName");

	if (nameSpan) {
		nameSpan.innerText = userName;
	}
//	document.getElementById("position").innerText = chrome.browserAction.getBadgeText();
//	document.getElementById("score").innerText = chrome.browserAction.getTitle();
}

function openNewTab(url) {
    chrome.tabs.create({ url: newURL });
}

document.addEventListener('DOMContentLoaded', function () {
	updateName();
});