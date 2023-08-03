

// Fancybox.bind('[data-fancybox="gallery"]');

// Fancybox.bind("#gallery a", {
//   groupAll : true,
// });

let galerias = document.querySelectorAll('.fancybox');
for (let i = 0; i < galerias.length; i++) {
  galerias[i].id = 'gal' + i;
  Fancybox.bind("#gal" + i + ' a', {
    groupAll: true,
  });
}
