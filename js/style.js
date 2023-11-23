var interval = 3000; // 轮播时间间隔（毫秒）
var slides = document.querySelectorAll(".slideshow img");
var currentSlide = 0; 

// 显示下一张图片
function nextSlide() {
  slides[currentSlide].className = "";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "active";
} 

// 开始轮播
function startSlideshow() {
  setInterval(nextSlide, interval);
}
startSlideshow();
