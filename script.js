// Funkcija, kas sadala vārdus grupās
function splitGroups() {
  // Iegūstam tekstu no ievades lauka (audzēkņu saraksts)
  const input = document.getElementById("students").value.trim();

  // Pārvēršam grupas izmēru par skaitli
  const groupSize = parseInt(document.getElementById("groupSize").value);

  // Rezultātu laukums, kur rādīt grupas
  const outputDiv = document.getElementById("groupsOutput");

  // Ja nav ievadīts teksts vai skaitlis nav derīgs, rādām kļūdas ziņu
  if (!input || isNaN(groupSize) || groupSize <= 0) {
    outputDiv.innerHTML = "<p>Lūdzu ievadi korektus datus.</p>";
    return;
  }

  // Sadalam tekstu rindās, iztīram tukšumus, ignorējam tukšas rindiņas
  let students = input.split('\n').map(s => s.trim()).filter(s => s !== '');

  // Sajaucam (randomizējam) vārdus nejaušā secībā
  students = students.sort(() => Math.random() - 0.5);

  // Veidojam grupas
  const groups = [];
  while (students.length) {
    groups.push(students.splice(0, groupSize));
  }

  // Attēlojam grupas rezultātu blokā
  outputDiv.innerHTML = "";
  groups.forEach((group, index) => {
    const groupHTML = `<p><strong>Grupa ${index + 1}:</strong> ${group.join(', ')}</p>`;
    outputDiv.innerHTML += groupHTML;
  });
}
