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

function openLightbox(p) {
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

function createPaintingButton(p) {
  const button = document.createElement("button");
  button.className = "painting";
  button.innerHTML = `
    <span class="painting-image">${renderThumb(p)}</span>
    <span class="painting-caption">
      <h3>${p.title}</h3>
      <p>${meta(p)}</p>
    </span>
  `;
  button.addEventListener("click", () => openLightbox(p));
  return button;
}

for (let i = 0; i < PAINTINGS.length; ) {
  const p = PAINTINGS[i];
  if (p.group) {
    const groupItems = [p];
    let j = i + 1;
    while (j < PAINTINGS.length && PAINTINGS[j].group === p.group) {
      groupItems.push(PAINTINGS[j]);
      j++;
    }
    const row = document.createElement("div");
    row.className = "painting-group";
    row.style.setProperty("--group-size", groupItems.length);
    groupItems.forEach((item) => row.appendChild(createPaintingButton(item)));
    gallery.appendChild(row);
    i = j;
  } else {
    gallery.appendChild(createPaintingButton(p));
    i++;
  }
}

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});
