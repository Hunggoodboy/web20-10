// Mảng ảnh các trang (sau bìa)
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];

const book = document.getElementById('book');
let currentPage = 0;

// Tạo các trang
images.forEach((src, i) => {
  const page = document.createElement('div');
  page.classList.add('page');
page.style.width = '100%';
page.style.height = '100%';  // bắt buộc
page.style.transform = 'rotateY(0deg)';
page.dataset.index = i + 1;

  const img = document.createElement('img');
  img.src = src;
  page.appendChild(img);

  book.appendChild(page);
});

const pages = Array.from(book.querySelectorAll('.page'));

function updatePages() {
  pages.forEach(page => {
    const idx = parseInt(page.dataset.index);
    if (idx <= currentPage) {
      page.style.transform = `rotateY(-180deg)`;
      page.style.zIndex = idx;
    } else {
      page.style.transform = `rotateY(0deg)`;
      page.style.zIndex = pages.length - idx;
    }
  });
}

// Nút phải
document.querySelector('.arrow-right').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

// Nút trái
document.querySelector('.arrow-left').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});
