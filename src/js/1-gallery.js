import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img12 from "../images/1-2.jpg";
import img22 from "../images/2-2.jpg";
import img23 from "../images/2-3.jpg";

const images = [
  { preview: img1, original: img1, description: "Image 1" },
  { preview: img2, original: img2, description: "Image 2" },
  { preview: img3, original: img3, description: "Image 3" },
  { preview: img12, original: img12, description: "Image 1-2" },
  { preview: img22, original: img22, description: "Image 2-2" },
  { preview: img23, original: img23, description: "Image 2-3" },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});