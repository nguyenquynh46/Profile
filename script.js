// thiết lập slide
const slices = document.getElementsByClassName("container-project");
const currentSlices = document.getElementById('container-project');
let slicesWidth = slices[0].offsetWidth;
let currentIndex = 0;
let positionX = 0;

function updateCarousel() {
    slicesWidth = slices[0].offsetWidth;
    positionX = -slicesWidth * currentIndex;
    currentSlices.style.transition = 'none';
    currentSlices.style.transform = `translateX(${positionX}px)`;
}

function nextSlice() {
    if (currentIndex < slices.length - 1) {
        positionX = positionX - slicesWidth;
        currentSlices.style.transition = 'transform 0.3s ease-in-out';
        currentSlices.style.transform = `translateX(${positionX}px)`;
        currentIndex++;
    }

    if (currentIndex === slices.length - 1) {
        setTimeout(() => {
            currentSlices.style.transition = 'none';
            currentSlices.style.transform = 'translateX(0)';
            positionX = 0;
            currentIndex = 0;
        }, 300);
    }
}

function previousSlice() {
    if (currentIndex > 0) {
        positionX = positionX + slicesWidth;
        currentSlices.style.transition = 'transform 0.3s ease-in-out';
        currentSlices.style.transform = `translateX(${positionX}px)`;
        currentIndex--;
    }

    if (currentIndex === 0) {
        setTimeout(() => {
            currentSlices.style.transition = 'none';
            currentSlices.style.transform = `translateX(${slicesWidth * (1 - slices.length)}px)`;
            positionX = slicesWidth * (1 - slices.length);
            currentIndex = slices.length;
        }, 300);
    }
}

window.addEventListener('resize', function() {
    updateCarousel();
});

// Gọi hàm updateCarousel ban đầu để cập nhật carousel
updateCarousel();

// Xử lý click menu
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu');
    var main = document.querySelector('.container');

    var slideContainer = document.querySelector('.slide-container');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Ngăn chặn việc lan truyền sự kiện click đến document

        slideContainer.classList.add('open'); // Thêm lớp "open" để hiển thị slide-container
        main.style.opacity="0.5"
    });

    document.addEventListener('click', function (event) {
        var targetElement = event.target;
        if (!slideContainer.contains(targetElement) && slideContainer.classList.contains('open')) {
            slideContainer.classList.remove('open'); // Xóa lớp "open" khi click bất kỳ đâu trên màn hình ngoài slide-container và slide-container đang hiển thị
            main.style.opacity="1"
        }
    });
});