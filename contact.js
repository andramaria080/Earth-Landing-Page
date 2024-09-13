const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailForm = document.getElementById("emailForm");
  const nameForm = document.getElementById("nameForm");
  const phoneForm = document.getElementById("phoneForm");
  const messageForm = document.getElementById("messageForm");
  const emailInput = emailForm.value;
  const nameInput = nameForm.value;
  const phoneInput = phoneForm.value;
  const messageInput = messageForm.value;

  if (!emailInput || !nameInput || !phoneInput || !messageInput) {
    alert("All fields are required");
    return;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p class="message-receved"> We got your message!</p>`;
  form.reset();
});
