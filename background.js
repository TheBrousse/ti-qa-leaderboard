function updateRank(rank) {
	var userName = localStorage["userName"];

	if (userName) {
		$.get("http://developer.appcelerator.com/questions/top-100-experts", function( html ) {
			var score = $(html).find('div.top100 span.top100-name:contains("' + userName + '")').parent().children().filter('.top100-points').text();
			var rank = $(html).find('div.top100 span.top100-name:contains("' + userName + '")').parent().children().filter('.top100-rank').text();

			chrome.browserAction.setBadgeText({ text: rank.substring(1) });
			chrome.browserAction.setTitle({ title: score });
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	chrome.browserAction.setBadgeBackgroundColor({ color: '#cd1625' });

	var interval = localStorage["refreshInterval"];

	if (interval) {
		interval = parseInt(interval);
	} else {
		interval = 15;
	}

	updateRank();
 	setInterval(updateRank, (interval*60000));
});