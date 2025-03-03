function changeImage() {
    images.forEach(img => img.style.opacity = "0");
    images[index].style.opacity = "1";
    index = (index + 1) % images.length;
}
