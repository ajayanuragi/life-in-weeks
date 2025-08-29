document.getElementById("dobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const dob = new Date(year, month, day);
  const today = new Date();
  const ageInWeeks = Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 7));
  const totalWeeks = 90 * 52;

  const ageTicks = document.getElementById("ageTicks");
  for (let i = 0; i <= 90; i += 5) {
    const div = document.createElement("div");
    div.textContent = i;
    ageTicks.appendChild(div);
  }

  // Generate Week Ticks (1–52, only some numbers)
  const weekTicks = document.getElementById("weekTicks");
  for (let i = 1; i <= 52; i++) {
    const span = document.createElement("span");
    if ([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].includes(i)) {
      span.textContent = i;
    } else {
      span.innerHTML = "&nbsp;"; // blank space
    }
    weekTicks.appendChild(span);
  }

  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < totalWeeks; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    if (i < ageInWeeks) {
      square.classList.add("past");
    }
    grid.appendChild(square);
  }
});
