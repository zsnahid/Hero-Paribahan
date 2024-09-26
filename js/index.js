const img = new Image();
img.src = "./images/banner.png";
img.onload = () => {
    const heroSection = document.getElementById('hero-section')
    heroSection.style.height = img.height + 'px';
}
