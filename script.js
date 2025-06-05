document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("splitButton").addEventListener("click", splitGroups);
});

function splitGroups() {
  const input = document.getElementById("students").value.trim();
  const groupSize = parseInt(document.getElementById("groupSize").value);
  const outputDiv = document.getElementById("groupsOutput");

  if (!input || isNaN(groupSize) || groupSize <= 0) {
    outputDiv.innerHTML = "<p>Lūdzu ievadi korektus datus.</p>";
    return;
  }

  let students = input.split('\n').map(s => s.trim()).filter(s => s !== '');
  students = students.sort(() => Math.random() - 0.5);

  const groups = [];
  while (students.length) {
    groups.push(students.splice(0, groupSize));
  }

  outputDiv.innerHTML = "";
  groups.forEach((group, index) => {
    const groupHTML = `<p><strong>Grupa ${index + 1}:</strong> ${group.join(', ')}</p>`;
    outputDiv.innerHTML += groupHTML;
  });
}
