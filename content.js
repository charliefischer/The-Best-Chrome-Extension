var handleSubmitClick = (e, inputField) => {
  e.preventDefault();
  const message = inputField.value;
  const url = window.location.href;
  localStorage.setItem(url, message);
  chrome.runtime.sendMessage({
    type: "note-exists",
    data: message,
  });
};

var main = (icons) => {
  const url = window.location.href;
  const storedData = localStorage.getItem(url);
  const isNote = document.querySelector("p[aria-label='note']");
  if (storedData && !isNote) {
    const node = document.querySelector(".pv-top-card");
    const p = document.createElement("p");
    p.ariaLabel = "note";
    p.innerHTML = "Who was that: " + storedData;
    p.style.paddingLeft = "2.4rem";
    node.appendChild(p);
    return;
  }
  icons.forEach((icon) => {
    icon.parentElement.addEventListener("click", () => {
      console.log("we have liftoff");
      icon.parentElement.style.background = "red";
      createForm(icon.parentElement);
    });
  });

  var createForm = (button) => {
    const url = window.location.href;
    const storedData = localStorage.getItem(url);
    const isNote = button.parentElement.parentElement.querySelector(
      "p[aria-label='note']"
    );
    if (storedData && !isNote) {
      const p = document.createElement("p");
      p.innerHTML = storedData;
      p.ariaLabel = "note";

      button.parentElement.parentElement.appendChild(p);
      return;
    }
    const form = document.createElement("form");

    const inputField = document.createElement("textarea");
    inputField.type = "textarea";
    inputField.style.height = "64px";

    const helperText = document.createElement("h3");
    helperText.innerHTML = "Add a note about who this is";

    const submitButton = document.createElement("input");
    submitButton.type = "submit";

    submitButton.addEventListener("click", (e) =>
      handleSubmitClick(e, inputField)
    );

    form.style.position = "fixed";
    form.style.top = "50%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
    form.style.background = "white";
    form.style.width = "400px";
    form.style["border-radius"] = "11px";
    form.style.padding = "30px";

    form.appendChild(helperText);
    form.appendChild(inputField);
    form.appendChild(submitButton);
    const node = document.querySelector(
      "div[aria-labelledby='send-invite-modal']"
    );
    node.appendChild(form);
  };
};
console.log("hello world");
if (typeof icons !== "undefined") {
  main(icons);
} else {
  let icons = document.querySelectorAll("li-icon[type='connect']");
  main(icons);
}
