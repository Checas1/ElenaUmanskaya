const classroomImages = document.querySelectorAll('.classroom_img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');

classroomImages.forEach((img) => {
  img.addEventListener('click', () => {
    const imgSrc = img.getAttribute('src');
    popupImage.setAttribute('src', imgSrc);
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Заблокировать прокрутку body
  });
});

popup.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // Разблокировать прокрутку body
});
