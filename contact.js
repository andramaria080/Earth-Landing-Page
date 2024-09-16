const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailForm = document.getElementById("emailForm").value;
  const nameForm = document.getElementById("nameForm").value;
  const phoneForm = document.getElementById("phoneForm").value;
  const messageForm = document.getElementById("messageForm").value;

  if (!emailForm || !nameForm || !phoneForm || !messageForm) {
    alert("All fields are required");
    return;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p class="message-receved"> We got your message!</p>`;
  form.reset();
});
