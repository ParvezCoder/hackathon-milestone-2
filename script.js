let showSkills = true;

function toggleSkills() {
  showSkills = !showSkills;
  const skillsList = document.getElementById("skillsList");
  const toggleButton = document.querySelector(".toggle-button");

  if (showSkills) {
    skillsList.style.display = "flex";
    toggleButton.textContent = "Hide Skills";
  } else {
    skillsList.style.display = "none";
    toggleButton.textContent = "Show Skills";
  }
}
