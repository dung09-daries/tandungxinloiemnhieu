const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hiệu ứng nút "Không" chạy trốn chuyên nghiệp
noBtn.addEventListener('mouseover', () => {
    // Tính toán vùng an toàn để nút không chạy ra ngoài màn hình
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Tạo vị trí ngẫu nhiên mới
    const randomX = Math.floor(Math.random() * maxX) + 10;
    const randomY = Math.floor(Math.random() * maxY) + 10;
    
    // Cập nhật vị trí nút
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Hiệu ứng khi bấm vào nút "Có"
yesBtn.addEventListener('click', () => {
    alert('Hì hì, biết ngay là bé sẽ tha lỗi cho anh mà! Yêu Dũng siêu đẹp trai nhất ❤️');
    // Bạn có thể chuyển hướng sang một link ảnh/video khác tại đây
    // window.location.href = "https://facebook.com/n"; 
});
