// ── YOUR CAKE CATALOGUE ──
// This is an array — a list of objects. Each object is one cake.
// To add a new cake later, just add a new block inside the [ ]
// To remove a cake, delete its block

const cakes = [
  {
    name: "Sheepish Cake",
    //description: "A nostalgic butterscotch cake",
    image: "images/cake1.jpg",
    gallery: [
      "images/cake1-b.jpg",
      "images/cake1.jpg",
      "images/cake1-c.jpg"
    ]
  },
    {
    name: "Fly like a butterfly",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake2.jpg",
    gallery: [
      "images/cake2-b.jpg",
      "images/cake2.jpg",
      "images/cake2-c.jpg"
    ]
  },
      {
    name: "A Fruity First",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake3.jpg",
    gallery: [
      "images/cake3-b.jpg",
      "images/cake3.jpg",
      "images/cake3-c.jpg"
    ]
  },
        {
    name: "The Floral Fanatasy",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake4.jpg",
    gallery: [
      "images/cake4-b.jpg",
      "images/cake4.jpg",
      "images/cake4-c.jpg"
    ]
  },
        {
    name: "Love you 3000",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake5.jpg",
    gallery: [
      "images/cake5-b.jpg",
      "images/cake5.jpg",
      "images/cake5-c.jpg"
    ]
  },
          {
    name: "Jungle Safari",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake6.jpg",
    gallery: [
      "images/cake6-b.jpg",
      "images/cake6.jpg",
      "images/cake6-c.jpg"
    ]
  },
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

