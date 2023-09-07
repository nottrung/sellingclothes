// hien thi phan cap nhat thong tin
const openModalLink = document.getElementById('openModalLink');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalLink.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chuyển hướng khi nhấn vào liên kết
modal.style.display = 'block'; // Hiển thị modal
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none'; // Đóng modal
});