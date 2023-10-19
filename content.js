console.log("hello world")
const icons = document.querySelectorAll("li-icon[type='connect']")
icons.forEach(icon => {
  icon.parentElement.addEventListener("click", () => {
    console.log("we have liftoff")
    const form = document.createElement("form");
    
    const inputField = document.createElement("input");
    inputField.type = "text";
    
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    
    form.style.position = "fixed";
    form.style.top = "50%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
    
    form.appendChild(inputField);
    form.appendChild(submitButton);
    const node = document.querySelector('div [data-test-modal-id="send-invite-modal"]')
    node.appendChild(form);
    console.log("shouldhave gone ")
  })
})
console.log(localStorage)