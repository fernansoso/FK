
window.onload = function () {
  const images = ['1.jpg','2.jpg','3.jpg','4.jpg','6.jpg',
    '7.jpg','9.jpg','10.jpg','11.jpg','12.jpg']; 
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = 'images/' + images[randomIndex];
  document.getElementById('randomImage').src = selectedImage;
  console.log("Selected image:", selectedImage);

} 