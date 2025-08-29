function calculateWeeks(event) {
  event.preventDefault();

  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const day = parseInt(document.getElementById("date").value);
  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    alert("Date of birth cannot be in the future.");
    return;
  }

  const diffTime = Math.abs(today - birthDate);
  const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  const totalWeeks = 90 * 52;

  const weeksLived = diffWeeks;
  const weeksLeft = totalWeeks - weeksLived;

  const resultDiv = document.getElementById("result");
  const footerDiv = document.querySelector(".footer");
  footerDiv.classList.remove("hidden");

  let statsHTML = `
    <div class="stats">
      <p>You have lived <strong>${weeksLived}</strong> weeks.</p>
      <p>You have approximately <strong>${weeksLeft}</strong> weeks left (assuming a lifespan of 90 years).</p>
    </div>
  `;

  let gridHTML = '<div class="weeks-grid">';
  for (let i = 0; i < totalWeeks; i++) {
    gridHTML += `<div class="week-box ${i < weeksLived ? "lived" : ""}"></div>`;
  }
  gridHTML += "</div>";

  resultDiv.innerHTML = gridHTML + statsHTML;
}
