
let challenges = [
    {

        title: "Thử thách 01",
        date: "00/00/2020 - 09/12/2023",
        description: "Lập 01 website giới thiệu về bản thân và thông tin quá trình thực tập tại I&E Việt Nam",
        link: "https://gregarious-strudel-01d0d5.netlify.app/"
    },
    {

        title: "Thử thách 02",
        date: "00/00/2020 - 09/12/2023",
        description: "Sử dụng HTML, CSS, JS viết minigame theo chủ đề bốc thăm",
        link: "https://quynhnt.thuctap.inevn.com/tt01/"
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
    ${challenges.map((challenge, i) => `
        <div class="wrap">
            <div class="timeline-container">
                <div class="text-box">
                    <h2>${challenge.title}</h2>
                    <small>${challenge.date}</small>
                    <p>${challenge.description}</p>
                    ${challenge.link ? `<a href="${challenge.link}">Link tham khảo</a>` : ''}
                    <button class="view-details" data-modal-id="modal${i}">Xem chi tiết</button>
                </div>
            </div>
        </div>
        <div class="modal" id="modal${i}">
             <div class="modal-content">
                 <h3 class="challenge-title">${challenge.title}</h3>
                 <button class="close-modal">Đóng</button>
                 <div class="modal-details">
                     <small>Thời gian :${challenge.date}</small>
                     <p>Nội dung: ${challenge.description}</p>
                     ${challenge.link ? `<a href="${challenge.link}">Link tham khảo</a>` : ''}
                     <img src="path_to_image" alt="Hình ảnh thử thách 1" class="challenge-image">
                 </div>
             </div>
        </div>
    `).join('')}
`;
//chuyển động của các thử thách
const wrapElements = document.querySelectorAll('.wrap-box .wrap');

for (let i = 0; i < wrapElements.length; i++) {
    wrapElements[i].style.animationDelay = i + 's';

    if (i % 2 === 1) {
        wrapElements[i].style.left = '50%';
    }
}
// Xử lý sự kiện khi nhấp vào nút "Xem chi tiết"
const viewDetailsButtons = document.querySelectorAll(".view-details");
viewDetailsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Xử lý sự kiện khi nhấp vào nút "Đóng" trong modal
const closeModalButtons = document.querySelectorAll(".close-modal");
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.style.display = "none";
    });
});
// thiết lập slide
const slices = document.getElementsByClassName("container-project");
const currentSlices = document.getElementById('container-project');
let slicesWidth = slices[0].offsetWidth;//chiều rộng của phần tử đầu tiên trong mảng slices
let currentIndex = 0;
let positionX = 0;

function updateCarousel() {
    slicesWidth = slices[0].offsetWidth;
    positionX = -slicesWidth * currentIndex;//định vị vị trí hiện tại của carousel.
    currentSlices.style.transition = 'none';
    currentSlices.style.transform = `translateX(${positionX}px)`;
}

function nextSlice() {
    if (currentIndex < slices.length - 1) {
        positionX = positionX - slicesWidth;
        currentIndex++;
    } else {
        positionX = 0;
        currentIndex = 0;
    }

    currentSlices.style.transition = 'transform 0.3s ease-in-out';
    currentSlices.style.transform = `translateX(${positionX}px)`;


}

function previousSlice() {
    if (currentIndex > 0) {
        positionX = positionX + slicesWidth;
        currentIndex--;
    } else {
        positionX = -slicesWidth * (slices.length - 1);
        currentIndex = slices.length - 1;
    }

    currentSlices.style.transition = 'transform 0.3s ease-in-out';
    currentSlices.style.transform = `translateX(${positionX}px)`;


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

    document.addEventListener('click', function () {

        if ( slideContainer.classList.contains('open')) {
            slideContainer.classList.remove('open'); // Xóa lớp "open" khi click bất kỳ đâu trên màn hình ngoài slide-container và slide-container đang hiển thị
            main.style.opacity="1"
        }
    });
});
// xong điều hướng bằng nút
function hienThiKhiCuonDenDiv() {
    var div = document.getElementById('challenge'); // Thay 'ten-div' bằng id của div bạn muốn bắt sự kiện

    var rect = div.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    console.log(rect.top, 11111)
    // Kiểm tra xem div có trong tầm nhìn của trình duyệt hay không
    if (rect.top < windowHeight && rect.bottom >= 0) {

        wrap.style.display = "block";
    } else {
        wrap.style.display = "none";
    }
}

// Gắn sự kiện cuộn cho trang web
// Gắn sự kiện cuộn cho trang web
window.addEventListener('scroll', () => {
    hienThiKhiCuonDenDiv();
});