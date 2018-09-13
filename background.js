chrome.browserAction.onClicked.addListener(function (tab) {   //listens for when the icon for the extension is clicked
	chrome.tabs.executeScript({     //injects the "inject.js" file and runs it
		file: 'inject.js'
	});
	{ //sends message to script "inject.js"
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
		});
	  });
	};
	//re-testing git

});