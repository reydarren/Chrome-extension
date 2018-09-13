//listens for when the icon for the extension is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	 //injects the "inject.js" file and runs it
	chrome.tabs.executeScript({
		file: 'inject.js'
	});
});