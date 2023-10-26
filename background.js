chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("background")
      if (request.type === "note-exists") {
        const data = request.data;
        console.log(data)
          const node = document.querySelector("#name")
          node.innerHTML = request.data
      }
  }
);