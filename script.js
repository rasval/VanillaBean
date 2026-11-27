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
            {
    name: "The Carnival",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake7.jpg",
    gallery: [
      "images/cake7-b.jpg",
      "images/cake7.jpg",
      "images/cake7-c.jpg"
    ]
  },
              {
    name: "Blue Elegance",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake8.jpg",
    gallery: [      
      "images/cake8.jpg",
      "images/cake8-b.jpg"
    ]
  },
                {
    name: "Butter-y Garden",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake9.jpg",
    gallery: [      
      "images/cake9.jpg",
      "images/cake9-b.jpg"
    ]
  },
                {
    name: "High in the Sky",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake10.jpg",
    gallery: [      
      "images/cake10-b.jpg"
      "images/cake10.jpg",
      "images/cake10-c.jpg"
    ]
  },
                {
    name: "Bouquet of Cravings",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake11.jpg",
    gallery: [      
      "images/cake11.jpg",
      "images/cake11-b.jpg"
    ]
  },
                {
    name: "Under Sweeet Construction",
    //description: "Chocolate cake with fresh strawberries",
    image: "images/cake12.jpg",
    gallery: []  
    
  },
 ];

// Build the cake grid
const grid = document.getElementById("cake-grid");

cakes.forEach(function(cake) {
  const card = document.createElement("div");
  card.className = "cake-card";

  card.innerHTML = `
    <img src="${cake.image}" alt="${cake.name}" loading="lazy">
    <div class="cake-info">
      <h3>${cake.name}</h3>
    </div>
  `;

  // Only add click listener if cake has a gallery
  card.style.cursor = "pointer";
  card.addEventListener("click", function() {
  openLightbox(cake);
  });

  grid.appendChild(card);
});

// Build the lightbox
function openLightbox(cake) {
  const lightbox = document.getElementById("lightbox");
  const galleryBox = document.getElementById("lightbox-gallery");

  document.getElementById("lightbox-title").textContent = cake.name;
  document.getElementById("lightbox-description").textContent = cake.description || "";

  // Use the gallery if it has photos, otherwise just the tile photo
  const photos = (cake.gallery && cake.gallery.length > 0) ? cake.gallery : [cake.image];

  // The main (large) photo is the one matching the tile photo
  let mainIndex = photos.indexOf(cake.image);
  if (mainIndex === -1) mainIndex = 0;

  // Clear old photos, then build new ones
  galleryBox.innerHTML = "";
  photos.forEach(function(src, i) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = cake.name;
    img.className = (i === mainIndex) ? "lightbox-main-img" : "lightbox-side";
    galleryBox.appendChild(img);
  });

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

function preloadGallery() {
  cakes.forEach(function(cake) {
    (cake.gallery || []).forEach(function(src) {
      const img = new Image();
      img.src = src;
    });
  });
}

window.addEventListener("load", function() {
  setTimeout(preloadGallery, 1000);
});