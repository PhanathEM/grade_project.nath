document
  .getElementById("gradeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const score = parseFloat(document.getElementById("score").value);
    let grade = "";

    if (score >= 90 && score <= 100) {
      grade = "A";
    } else if (score >= 80 && score < 90) {
      grade = "B";
    } else if (score >= 70 && score < 80) {
      grade = "C";
    } else if (score >= 60 && score < 70) {
      grade = "D";
    } else if (score >= 50 && score < 60) {
      grade = "E";
    } else if (score >= 0 && score < 50) {
      grade = "F";
    } else {
      grade = "Invalid score";
    }
    document.getElementById("gradeOutput").textContent = `You've got grade: ${grade}`;
  });
