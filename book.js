const images = [
  'assets/image/IMG_2.jpeg',
  'assets/image/Pic1.jpg',
  'assets/image/right2.jpg',
  // ... các ảnh mặt trước
];

const backImages = [
  'assets/image/IMG_BACK_2.jpeg',
  'assets/image/PicBack1.jpg',
  'assets/image/IMG_BACK_3142.jpg',
  // ... các ảnh mặt sau tương ứng
];

const book = document.getElementById('book');
let currentPage = 0;

images.forEach((src, i) => {
  const page = document.createElement('div');
  page.classList.add('page');
  page.dataset.index = i + 1;

  // Mặt trước
  const front = document.createElement('div');
  front.classList.add('front');
  const imgFront = document.createElement('img');
  imgFront.src = src;
  front.appendChild(imgFront);

  // Mặt sau
  const back = document.createElement('div');
  back.classList.add('back');
  const imgBack = document.createElement('img');
  imgBack.src = backImages[i];
  back.appendChild(imgBack);

  page.appendChild(front);
  page.appendChild(back);
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

document.querySelector('.arrow-right').addEventListener('click', () => {
  if (currentPage < pages.length) {
    currentPage++;
    updatePages();
  }
});

document.querySelector('.arrow-left').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});
