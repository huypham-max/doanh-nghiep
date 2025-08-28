// Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 2, direction: 'none', random: true }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
  }
});

// Typed.js
new Typed('.typed-text', {
  strings: [
    'Người dân Phước Tỉnh – đánh bắt, nuôi trồng, đảm bảo chất lượng',
    'Sản phẩm tươi ngon, giao tận nơi, uy tín tuyệt đối',
    'Hương vị biển quê, chất lượng hàng đầu'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Lazy Loading
const images = document.querySelectorAll('.product img');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

// Carousel 3D

const productGrid = document.querySelector('.product-grid');
let currentIndex = 0;
const products = document.querySelectorAll('.product');
const totalProducts = products.length;

function updateCarousel() {
  const offset = -currentIndex * (products[0].offsetWidth + 40);
  productGrid.style.transform = `translateX(${offset}px)`;
  products.forEach((product, index) => {
    const rotate = (index - currentIndex) * 10;
    product.style.transform = `rotateY(${rotate}deg)`;
  });
}

window.addEventListener('resize', updateCarousel);

// Auto-rotate Carousel
setInterval(() => {
  if (currentIndex < totalProducts - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000);


// Auto-rotate Carousel
setInterval(() => {
  if (currentIndex < totalProducts - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000);

// Quick View
const quickViewModal = document.querySelector('.quick-view-modal');
const quickViewImg = document.getElementById('quick-view-img');
const quickViewTitle = document.getElementById('quick-view-title');
const quickViewPrice = document.getElementById('quick-view-price');
const quickViewDesc = document.getElementById('quick-view-desc');

document.querySelectorAll('.quick-view').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const product = products[index];
    quickViewImg.src = product.querySelector('img').dataset.src;
    quickViewTitle.textContent = product.querySelector('h3').textContent;
    quickViewPrice.textContent = product.querySelector('.price-tag').textContent;
    quickViewDesc.textContent = product.querySelector('p').textContent;
    quickViewModal.classList.add('show');
  });
});

document.querySelector('.close-modal').addEventListener('click', () => {
  quickViewModal.classList.remove('show');
});

quickViewModal.addEventListener('click', (e) => {
  if (e.target === quickViewModal) {
    quickViewModal.classList.remove('show');
  }
});

// Add to Cart (Placeholder)
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  });
});

// Section Animation
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => sectionObserver.observe(section));

// Back to Top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Submission (Placeholder)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Yêu cầu đặt hàng đã được gửi! Chúng tôi sẽ liên hệ sớm.');
  e.target.reset();
});
document.getElementById('submitForm').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('formMessage');
  const formError = document.getElementById('formError');

  if (name && email && message) {
    formMessage.classList.remove('hidden');
    formError.classList.add('hidden');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 3000);
  } else {
    formError.classList.remove('hidden');
    setTimeout(() => {
      formError.classList.add('hidden');
    }, 3000);
  }
});
function toggleCategoryMenu() {
  const dropdown = document.getElementById('categoryDropdown');
  dropdown.classList.toggle('hidden');
}

function toggleMobileMenu() {
  const navbar = document.getElementById('navbarSupportedContent');
  navbar.classList.toggle('hidden');
}

function showSuggestions(keyword) {
  const suggestionBox = document.getElementById('txtHint');
  if (keyword.length === 0) {
    suggestionBox.classList.add('hidden');
    suggestionBox.innerHTML = '';
    return;
  }
  // Mock suggestions (replace with actual API call if needed)
  const suggestions = [
  ].filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
  suggestionBox.innerHTML = suggestions.length > 0
    ? `<ul class="p-2">${suggestions.map(item => `<li class="p-2 hover:bg-gray-100">${item}</li>`).join('')}</ul>`
    : '<p class="p-2">Không tìm thấy sản phẩm</p>';
  suggestionBox.classList.remove('hidden');
}

function submitSearch() {
  const form = document.getElementById('myForm');
  form.submit();
}

document.querySelectorAll('.nav-link').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});
''
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
