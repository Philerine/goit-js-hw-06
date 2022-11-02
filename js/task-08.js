const formInput = document.querySelector(".login-form");

formInput.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert`Всі поля повинні бути заповнені.`;
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
}

