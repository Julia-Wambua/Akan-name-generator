document.getElementById("inputform").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthdateInput = document.getElementById("birthdate").value;
  const gender = document.getElementById("male,female,other").value;
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  // Clear previous messages
  error.textContent = "";
  result.textContent = "";

  // Validation: empty fields
  if (!birthdateInput || !gender) {
    error.textContent = "Please fill in all fields.";
    return;
  }

  const birthdate = new Date(birthdateInput);
  const today = new Date();

  // Validation: invalid date
  if (isNaN(birthdate.getTime())) {
    error.textContent = "Please enter a valid date.";
    return;
  }

  // Validation: future date
  if (birthdate > today) {
    error.textContent = "Birthdate cannot be in the future.";
    return;
  }

  const day = birthdate.getDay(); // 0 = Sunday, 6 = Saturday

  const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena",
    "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  const femaleNames = [
    "Akosua", "Adwoa", "Abenaa",
    "Akua", "Yaa", "Afua", "Ama"
  ];

  let akanName;

  if (gender === "male") {
    akanName = maleNames[day];
  } else {
    akanName = femaleNames[day];
  }


  document.getElementById("akanName").textContent = akanName;
  document.getElementById("akannameoutput").scrollIntoView({
     behavior: "smooth"
});




