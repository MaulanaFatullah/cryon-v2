const navButton = document.querySelector('.nav-btn');
const navMobile = document.querySelector('.nav-mobile');

// ---------------------------------------------------------------


let collectionPage = document.getElementById('collection-page');
let totalImg = 22;

// Dialog iteration
for (let imageNumber = 1; imageNumber < totalImg; imageNumber++) {

   const dialog = document.createElement('dialog');
   dialog.id = 'img-modal-' + imageNumber;
   dialog.classList.add('img-modal');

   const imgModal = document.createElement('img');
   imgModal.id = 'img-modal-src-' + imageNumber;
   imgModal.classList.add('shadow-2xl');
   imgModal.setAttribute('loading', 'lazy');
   imgModal.src = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + imageNumber + '.jpeg';
   imgModal.srcset = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-400/pic-' + imageNumber + '.jpeg 400w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + imageNumber + '.jpeg 800w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-1200/pic-' + imageNumber + '.jpeg 1200w';

   const btnClose = document.createElement('div');
   btnClose.id = 'btn-close-img-' + imageNumber;
   btnClose.classList.add('btn-close-img');
   const spanClose = document.createElement('span');
   spanClose.appendChild(document.createTextNode('✖'));
   btnClose.appendChild(spanClose);

   dialog.appendChild(imgModal);
   dialog.appendChild(btnClose);
   document.getElementById('collection-modal').appendChild(dialog);

   const imageModalNumber = document.querySelector('#img-modal-' + imageNumber);
   const closeImageModal = document.getElementById('btn-close-img-' + imageNumber);

   closeImageModal.addEventListener('click', function () {
      imageModalNumber.classList.add('hide-collection-modal');

      console.log(imageModalNumber);
      if (imageModalNumber.classList.contains('hide-collection-modal') === true) {
         imageModalNumber.addEventListener('webkitAnimationEnd', function eventRemove() {
            imageModalNumber.classList.remove('hide-collection-modal');
            imageModalNumber.close();
            imageModalNumber.removeEventListener('webkitAnimationEnd', eventRemove, false);
         }, false);
      }
   });
}

// Collection Image iteration
for (let modalNumber = 1; modalNumber < totalImg; modalNumber++) {

   const collectionImage = document.createElement('div');
   collectionImage.id = 'snapshot-collection-' + modalNumber;
   collectionImage.classList.add('img-collection', 'btn-img-modal', 'elementHidden', '-translate-y-10');
   const img = document.createElement('img');
   img.id = 'img-src';
   img.src = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg';
   img.srcset = 'https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-400/pic-' + modalNumber + '.jpeg 400w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-800/pic-' + modalNumber + '.jpeg 800w, https://ik.imagekit.io/maulanafatullah/Kryon/tr:w-1200/pic-' + modalNumber + '.jpeg 1200w';
   img.setAttribute('loading', 'lazy');
   collectionImage.appendChild(img);
   document.getElementById('collection-image').appendChild(collectionImage);


   const snapModal = document.getElementById('snapshot-collection-' + modalNumber);

   const imageModal = document.querySelector('#img-modal-' + modalNumber);

   snapModal.addEventListener('click', function () {
      imageModal.showModal();
   });
}
