console.log("This is a popup!");
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   chrome.scripting.executeScript({
     files: ["content.js"],
     target: { tabId: tabs[0].id }
   });
})
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("listttenner")
      if (request.type === "note-exists") {
        const data = message.data;
        console.log(data)
          const node = document.querySelector("#name")
          node.innerHTML = message.data
      }
  }
);
