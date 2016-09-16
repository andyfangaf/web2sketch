chrome.browserAction.setBadgeText({text: 'Make'});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.browserAction.setBadgeText({text: 'Creating'});
  if (request == 'screenshot') {
    chrome.tabs.captureVisibleTab(null, {}, function(data) {
      console.log("screenshotData: " + data);
    }
  })
})

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  console.log("Received from tab: ", sender.tab);
});
