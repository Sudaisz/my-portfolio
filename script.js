// ====== Auto Age Counter ======
// change this to your birth year/month/day
const birthDate = new Date("2009-06-03"); // example birthday

function calculateAge() {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.getElementById("age").innerText = "Age: " + calculateAge();
document.getElementById("age-inline").innerText = calculateAge();

// ====== Visitor Counter ======
function updateVisitorCount() {
  fetch('https://api.countapi.xyz/hit/myportfolio/visits')
    .then(res => res.json())
    .then(data => {
      document.getElementById("visitor-count").innerText = data.value;
    })
    .catch(() => {
      document.getElementById("visitor-count").innerText = "—";
    });
}

updateVisitorCount();