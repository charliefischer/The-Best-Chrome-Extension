console.log("This is a popup!");
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   chrome.scripting.executeScript({
     files: ["content.js"],
     target: { tabId: tabs[0].id }
   });

})
