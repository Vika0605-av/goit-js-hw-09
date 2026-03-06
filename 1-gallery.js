import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as n}from"./assets/vendor-CgTBfC_f.js";const i="/goit-js-hw-09/assets/1-DBlN7hdS.jpg",e="/goit-js-hw-09/assets/2-DFB3YBou.jpg",s="/goit-js-hw-09/assets/3-BHc9DWZE.jpg",a="/goit-js-hw-09/assets/1-2-BevvGKQm.jpg",t="/goit-js-hw-09/assets/2-2-DEi0Xf13.jpg",g="/goit-js-hw-09/assets/2-3-kdfu4pFN.jpg",p=[{preview:i,original:i,description:"Image 1"},{preview:e,original:e,description:"Image 2"},{preview:s,original:s,description:"Image 3"},{preview:a,original:a,description:"Image 1-2"},{preview:t,original:t,description:"Image 2-2"},{preview:g,original:g,description:"Image 2-3"}],c=document.querySelector(".gallery"),m=p.map(({preview:o,original:r,description:l})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${l}"
        />
      </a>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",m);new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
