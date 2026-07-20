document.getElementById("year").textContent = new Date().getFullYear();

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");
const lightboxDescription = document.getElementById("lightbox-description");

function meta(p) {
  return [p.year, p.medium, p.size].filter(Boolean).join(" · ");
}

function renderThumb(p) {
  return p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<span class="placeholder-label">${p.title}</span>`;
}

let currentIndex = -1;

function openLightbox(index) {
  currentIndex = index;
  const p = PAINTINGS[currentIndex];
  lightboxImage.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<span class="placeholder-label">${p.title}</span>`;
  lightboxTitle.textContent = p.title;
  lightboxMeta.textContent = meta(p);
  lightboxDescription.textContent = p.description || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function showPrev() {
  openLightbox((currentIndex - 1 + PAINTINGS.length) % PAINTINGS.length);
}

function showNext() {
  openLightbox((currentIndex + 1) % PAINTINGS.length);
}

function createPaintingButton(p, index) {
  const button = document.createElement("button");
  button.className = "painting";
  button.innerHTML = `
    <span class="painting-image">${renderThumb(p)}</span>
    <span class="painting-caption">
      <h3>${p.title}</h3>
      <p>${meta(p)}</p>
    </span>
  `;
  button.addEventListener("click", () => openLightbox(index));
  return button;
}

for (let i = 0; i < PAINTINGS.length; ) {
  const p = PAINTINGS[i];
  if (p.group) {
    const groupItems = [];
    let j = i;
    while (j < PAINTINGS.length && PAINTINGS[j].group === p.group) {
      groupItems.push(j);
      j++;
    }
    const row = document.createElement("div");
    row.className = "painting-group";
    row.style.setProperty("--group-size", groupItems.length);
    groupItems.forEach((idx) => row.appendChild(createPaintingButton(PAINTINGS[idx], idx)));
    gallery.appendChild(row);
    i = j;
  } else {
    gallery.appendChild(createPaintingButton(p, i));
    i++;
  }
}

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", showPrev);
document.querySelector(".lightbox-next").addEventListener("click", showNext);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
