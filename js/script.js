

const dataPreviewClose = document.querySelector('.yk__data-preview--close');
const tableRow = document.querySelector('.yk__table-row');
const dataPreviewCard = document.querySelector('.yk__data-preview');
const dataPreviewBg = document.querySelector('.yk__data-preview--bg');

tableRow.addEventListener('click', (e) => {
  e.preventDefault();
  dataPreviewBg.classList.remove('d-none');
  dataPreviewCard.classList.remove('d-none');
  dataPreviewBg.classList.add('d-block');
  dataPreviewCard.classList.add('d-block');
})

const closeDataPreview = () => {
  dataPreviewCard.classList.add('d-none');
  dataPreviewBg.classList.add('d-none');
  dataPreviewCard.classList.remove('d-block');
  dataPreviewBg.classList.remove('d-block');
}

dataPreviewBg.addEventListener('click', closeDataPreview);
dataPreviewClose.addEventListener('click', closeDataPreview);
