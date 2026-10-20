
// Ganti dengan nomor WhatsApp bisnis kamu.
// Gunakan kode negara 62 tanpa tanda + atau angka 0 di awal.
const nomorWhatsApp = "6281234567890";

const pesanUmum =
  "Halo, saya tertarik dengan produk Basreng Kriuk Bandung. Boleh minta informasi produk dan harganya?";

// Tombol WhatsApp utama
const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
  whatsappButton.href =
    "https://wa.me/" + nomorWhatsApp +
    "?text=" + encodeURIComponent(pesanUmum);
}

// Tombol tanya produk
document.querySelectorAll("[data-product]").forEach(function (button) {
  const produk = button.dataset.product;

  const pesan =
    "Halo, saya ingin bertanya tentang " + produk +
    " dari Basreng Kriuk Bandung. Boleh minta informasi harga dan ketersediaannya?";

  button.href =
    "https://wa.me/" + nomorWhatsApp +
    "?text=" + encodeURIComponent(pesan);

  button.target = "_blank";
  button.rel = "noopener noreferrer";
});

// Menu navigasi untuk HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      menuToggle.textContent = "☰";
    });
  });
}
