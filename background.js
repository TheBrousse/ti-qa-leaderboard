function updateRank(rank) {
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
	chrome.browserAction.setBadgeText({text: 'your text'});
}