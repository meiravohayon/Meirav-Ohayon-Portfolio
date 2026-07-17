// Add one entry per painting. To use a real photo, set `image` to a filename
// inside the images/ folder (e.g. "images/sunset-1.jpg"). Leave `image` as
// null to show a placeholder block until you have the photo ready.
//
// Title, year, medium, and size are parsed from each photo's filename in
// images/. To change a painting's details, rename its file in that folder
// using the same "Title, Year, Medium, Size.jpg" pattern.
const PAINTINGS = [
  {
    title: "Madrid",
    year: 2026,
    medium: "Acrylic and charcoal on canvas",
    size: "42 x 61.5 cm",
    image: "images/Madrid, 2026, Acrylic and charcoal on canvas · 42 x 61.5 cm.jpg",
    description: "",
  },
  {
    title: "The Long Man",
    year: 2025,
    medium: "Mixed media on canvas",
    size: "69.5 x 88 cm",
    image: "images/The long man, 2025, mixed media on canvas 69.5x88 cm.jpg",
    description: "",
  },
  {
    title: "Carnabos",
    year: 2026,
    medium: "Charcoal and ink on paper",
    size: "100 x 70 cm",
    image: "images/Carnabos, 2026, charcoal&ink on paper, 100x70.jpg",
    description: "",
  },
  {
    title: "Maya",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "95 x 55 cm",
    image: "images/Maya, 2026, mixed media on canvas 95x55cm.jpg",
    description: "",
  },
  {
    title: "The Day Before the War",
    year: 2026,
    medium: "Acrylic on canvas",
    size: "142 x 95 cm",
    image: "images/The day before the war, 2026, acrylic on canvas 142x95.jpg",
    description: "",
  },
  {
    title: "Triptych 1",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "69 x 50 cm",
    image: "images/Triptych1, 2026, mixed media on canvas,69x50 cm.jpg",
    description: "",
    group: "triptych",
  },
  {
    title: "Triptych 2",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "69 x 50 cm",
    image: "images/Triptych 2, 2026, mixed media on canvas,69x50 cm.jpg",
    description: "",
    group: "triptych",
  },
  {
    title: "Triptych 3",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "69 x 50 cm each",
    image: "images/Triptych 3, 2026, mixed media on canvas,69x50 cm each.jpg",
    description: "",
    group: "triptych",
  },
  {
    title: "Untitled",
    year: 2026,
    medium: "Charcoal on paper",
    size: "A4",
    image: "images/Untitled, 2026, charcoal on paper, A4.jpg",
    description: "",
  },
  {
    // NOTE: this file's name says 2026 / mixed media on canvas, but you
    // earlier told me this same painting (by content) was 2005 / Acrylic
    // on canvas. Using the filename's info per your request — let me know
    // which is right and I'll fix it.
    title: "Untitled",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "142 x 95 cm",
    image: "images/Untitled, 2026, mixed media on canvas 142x95cm.jpg",
    description: "",
  },
  {
    title: "Untitled",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "188 x 129 cm",
    image: "images/Untitled, 2026, mixed media on canvas 188x129.jpg",
    description: "",
  },
  {
    title: "Untitled",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "69.5 x 45 cm",
    image: "images/Untitled, 2026, mixed media on canvas 69.5x45cm.jpg",
    description: "",
  },
  {
    title: "Untitled",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "96 x 58 cm",
    image: "images/Untitled, 2026, mixed media on canvas 96x58.jpg",
    description: "",
  },
  {
    title: "Untitled",
    year: 2026,
    medium: "Mixed media on canvas",
    size: "96 x 61 cm",
    image: "images/Untitled, 2026, mixed media on canvas 96x61cm.jpg",
    description: "",
  },
];
