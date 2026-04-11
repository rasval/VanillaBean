// ── YOUR CAKE CATALOGUE ──
// This is an array — a list of objects. Each object is one cake.
// To add a new cake later, just add a new block inside the [ ]
// To remove a cake, delete its block

const cakes = [
  {
    name: "Sheepish cake",
    description: "Butterscotch cake with a sheep on top",
    image: "images/cake1.jpg"
  },
  {
    name: "Coming Soon",
    description: "More beautiful cakes being added shortly",
    image: "https://placehold.co/400x300/F5F0D0/2D6A2D?text=Vanilla+Bean"
  },
  {
    name: "Coming Soon",
    description: "More beautiful cakes being added shortly",
    image: "https://placehold.co/400x300/F5F0D0/2D6A2D?text=Vanilla+Bean"
  }
];


// ── THIS PART BUILDS THE CATALOGUE AUTOMATICALLY ──
// It reads your cakes array above and creates the HTML for each one

const grid = document.getElementById("cake-grid");

cakes.forEach(function(cake) {
  const card = document.createElement("div");
  card.className = "cake-card";

  card.innerHTML = `
    <img src="${cake.image}" alt="${cake.name}">
    <div class="cake-info">
      <h3>${cake.name}</h3>
      <p>${cake.description}</p>
    </div>
  `;

  grid.appendChild(card);
});