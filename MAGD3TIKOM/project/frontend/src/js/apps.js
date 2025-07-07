// ==== Fungsi: Tambahkan kelas 'scrolled' ke navbar saat halaman discroll lebih dari 50px ====
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ==== Fungsi: Scroll ke atas halaman saat tombol 'scroll-top-btn' diklik ====
document.querySelector('.scroll-top-btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
