// ── YOUR CAKE CATALOGUE ──
// This is an array — a list of objects. Each object is one cake.
// To add a new cake later, just add a new block inside the [ ]
// To remove a cake, delete its block

const cakes = [
  {
    name: "Sheepish Cake",
    description: "Butterscotch cake with a sheep on top",
    image: "images/cake1.jpg",
    gallery: [
      "images/cake1-b.jpeg",
      "images/cake1.jpg",
      "images/cake1-c.jpeg"
    ]
  },
  {
    name: "Coming Soon",
    description: "More beautiful cakes being added shortly",
    image: "https://placehold.co/400x300/F5F0D0/2D6A2D?text=Vanilla+Bean",
    gallery: []
  },
  {
    name: "Coming Soon",
    description: "More beautiful cakes being added shortly",
    image: "https://placehold.co/400x300/F5F0D0/2D6A2D?text=Vanilla+Bean",
    gallery: []
  }
];

// Build the cake grid
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

  // Only add click listener if cake has a gallery
  if (cake.gallery.length > 0) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function() {
      openLightbox(cake);
    });
  }

  grid.appendChild(card);
});

// Build the lightbox
function openLightbox(cake) {
  const lightbox = document.getElementById("lightbox");
  const title = document.getElementById("lightbox-title");
  const description = document.getElementById("lightbox-description");
  const mainImg = document.getElementById("lightbox-main");
  const leftImg = document.getElementById("lightbox-left");
  const rightImg = document.getElementById("lightbox-right");

  // Fill in content
  title.textContent = cake.name;
  description.textContent = cake.description;
  mainImg.src = cake.gallery[1];
  leftImg.src = cake.gallery[0];
  rightImg.src = cake.gallery[2];

  // Show the lightbox with a smooth fade in
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// Close when clicking outside the content box
document.getElementById("lightbox").addEventListener("click", function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});

