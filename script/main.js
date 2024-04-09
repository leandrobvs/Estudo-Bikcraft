// Links ativos - decoração //

let url = location.href;
const links = document.querySelectorAll('.header-content a');

links.forEach(function (link) {
  [currentPage] = link.pathname.split('.html');

  if (url.includes(currentPage)) {
    link.classList.add('ativo');
  }
});

// Orçamento com pré-informação carregada //

const params = new URLSearchParams(location.search);

params.forEach(function (param) {
  const selectedProduct = document.getElementById(param);
  if (selectedProduct) {
    selectedProduct.checked = true;
  }
});

// Galeria bibicletas //

const images = document.querySelectorAll('.bicicleta-img img');
const galery = document.querySelector('.bicicleta-img');

images.forEach(function (image) {
  image.addEventListener('click', function (e) {
    const media = matchMedia('(min-width: 920px)').matches;
    console.log(media);
    if (media) {
      galery.prepend(e.target);
    }
  });
});
