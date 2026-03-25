/* =========================
   BIG IMAGE MODAL
========================= */
const imageModal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImage");
const imageCloseBtn = imageModal?.querySelector(".modal-close");

function openImageModal(imageSrc) {
  if (!imageModal || !modalImg) return;
  modalImg.src = imageSrc;
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  if (!imageModal || !modalImg) return;
  imageModal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

/* Click any element with .gallery-trigger */
document.querySelectorAll(".gallery-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const full = btn.getAttribute("data-full");
    if (full) openImageModal(full);
  });
});

imageCloseBtn?.addEventListener("click", closeImageModal);

imageModal?.addEventListener("click", (e) => {
  if (e.target === imageModal) closeImageModal();
});

/* =========================
   PROJECT PREVIEW MODAL
========================= */
const projectModal = document.getElementById("projectModal");
const projectTitle = document.getElementById("projectTitle");
const projectGrid = document.getElementById("projectGrid");
const projectClose = document.getElementById("projectClose");

const galleries = {
  amazon: [
  { src: "images/maju-tallow-ingredients.png", alt: "Amazon A+ 1" },
  { src: "images/maju-tallow-lifestyle.png", alt: "Amazon A+ 2" },
  { src: "images/maju-tallow-usage.png", alt: "Amazon A+ 3" },
  { src: "images/a1.png", alt: "Amazon A+ 4" },
  { src: "images/a2.png", alt: "Amazon A+ 5" },
  { src: "images/ad-3.png", alt: "Amazon A+ 6" },
  { src: "images/a4.png", alt: "Amazon A+ 7" },
  { src: "images/a5.png", alt: "Amazon A+ 8" }
  ],
  brand: [
  { src: "images/ad-1.png", alt: "Brand Ad 1" },
  { src: "images/ad-2.png", alt: "Brand Ad 2" },
  { src: "images/social-1.png", alt: "Brand Ad 3" },
  { src: "images/social-2.png", alt: "Brand Ad 4" }
  ],
  poster: [
  { src: "images/1.png", alt: "Poster 1" },
  { src: "images/3.png", alt: "Poster 2" },
  { src: "images/2.png", alt: "Poster 3" },
  { src: "images/4.png", alt: "Poster 4" }
  ],
  brochure: [
  { src: "images/brochure-1.png", alt: "Brochure 1" },
  { src: "images/brochure-2.png", alt: "Brochure 2" }
  ],
  cover: [
  { src: "images/lakbay-pag-asa.png", alt: "Cover 1" },
  { src: "images/brochure-3.png", alt: "Cover 2" },
  { src: "images/brochure-4.png", alt: "Cover 3" },
  { src: "images/brochure-5.png", alt: "Cover 4" },
  { src: "images/brochure-6.png", alt: "Cover 5" }
  ]
};

function openProjectModal(galleryKey, titleText) {
  if (!projectModal || !projectTitle || !projectGrid) return;

  projectTitle.textContent = titleText || "Project Preview";
  projectGrid.innerHTML = "";

  const items = galleries[galleryKey] || [];

  items.forEach((item) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.type = "button";
    thumbBtn.setAttribute("aria-label", "Open larger preview");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "Work preview";

    thumbBtn.appendChild(img);

    thumbBtn.addEventListener("click", () => {
      openImageModal(item.src);
    });

    projectGrid.appendChild(thumbBtn);
  });

  projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.setAttribute("aria-hidden", "true");
}

/* Open preview modal when clicking portfolio cards */
document.querySelectorAll(".project-open").forEach((card) => {
  card.addEventListener("click", () => {
    const galleryKey = card.getAttribute("data-gallery");
    const titleText = card.getAttribute("data-title");
    openProjectModal(galleryKey, titleText);
  });
});

projectClose?.addEventListener("click", closeProjectModal);

projectModal?.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProjectModal();
});

/* ESC closes whichever modal is open */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (imageModal?.getAttribute("aria-hidden") === "false") closeImageModal();
    if (projectModal?.getAttribute("aria-hidden") === "false") closeProjectModal();
  }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("fade-out");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("fade-out");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((el) => observer.observe(el));