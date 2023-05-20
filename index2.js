function validateSignInForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert("Your name, email, or password is incorrect.");
    return false;
  }

  return true;
}