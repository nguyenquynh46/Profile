
let challenges = [
    {

        title: "Thử thách 01",
        date: "00/00/2020 - 09/12/2023",
        description: "Lập 01 website giới thiệu về bản thân và thông tin quá trình thực tập tại I&E Việt Nam",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 02",
        date: "00/00/2020 - 09/12/2023",
        description: "Sử dụng HTML, CSS, JS viết minigame theo chủ đề bốc thăm",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 03",
        date: "00/00/2020 - 09/12/2023",
        description: "Sử dụng quy chuẩn code được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được cung cấp",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 04",
        date: "11/12/2023 - 16/11/2023",
        description: "Sử dụng INEVO để thiết kế 01 website động lấy dữ liệu thực từ h thống nội bộ",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 05",
        date: "00/00/2020 - 09/12/2023",
        description: "Ứng dụng INEVO triển khai tạo một website giớ thiệu về lịch sử Việt Nam với giao dện tuỳ chon",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 06",
        date: "00/00/2020 - 09/12/2023",
        description: "Thiết kế giao diê phần mềm trên hệ thống nội bộ INEVO theo thiết kế có sẵn",
        link: "https://example.com/challenge1"
    },
    {

        title: "Thử thách 07",
        date: "11/12/2023 - 16/11/2023",
        description: "Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mnm quản lý bài viết của bản thân trên hệ thống Inevo",

        link: "https://example.com/challenge1"
    },
    // Thêm các thử thách khác vào mảng
];

let challengesContainer = document.querySelector(".wrap-box");
challengesContainer.innerHTML = `
    ${challenges.map(challenge => `
        <div class="wrap ">
            <div class="timeline-container">
                <div class="text-box">
                    <h2>${challenge.title}</h2>
                    <small>${challenge.date}</small>
                    <p>${challenge.description}</p>
                    ${challenge.link ? `<a href="${challenge.link}">Link tham khảo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('')}
`;
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