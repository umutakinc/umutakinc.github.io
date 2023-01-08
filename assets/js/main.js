const $images = $('.gallery-image img');
const $modal = $('#galleryModal');
const $modalBody = $('#galleryModal .modal-body');
const $slider = $('<div/>', {'class':'slider'});

$slider.appendTo($modalBody);

$modal.on('shown.bs.modal', event => {
  let index = +event.relatedTarget.dataset.index;
  $slider.empty();
  $images.each((i, item) => {
    const $img = $(`<div><img src="${item.src}"></div>`);
    $img.appendTo($slider);
  });
  $slider.slick({
    adaptiveHeight: true,
    initialSlide: index,
  });
  $slider.addClass('in');
});

$modal.on('hidden.bs.modal', event => {
  $slider.slick('unslick');
  $slider.removeClass('in');
});
