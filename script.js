// scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  // tampilkan tombol jika sudah scroll 100px ke bawah
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// fungsi scroll ke atas saat tombol diklik
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // optional: simpan preferensi ke localStorage agar tetap setelah reload
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// cek preferensi dark mode saat halaman dimuat
window.addEventListener('load', () => {
  if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

// Smooth scroll untuk semua link navigasi yang mengarah ke anchor
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);

    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
