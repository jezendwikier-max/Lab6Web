// script.js
const form = document.getElementById("formPendaftaran");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiInput = document.getElementById("sesiWorkshop");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const pesanForm = document.getElementById("pesanForm");
const tombolReset = document.getElementById("tombolReset");

// 1. Fungsi Penghitung Karakter (Sisa Karakter Maksimal 40)
const maxLength = 40;
namaInput.addEventListener("input", function () {
    const panjangKetik = namaInput.value.length;
    const sisa = maxLength - panjangKetik;
    jumlahKarakter.textContent = sisa;
});

// 2. Event Listener untuk Tombol Reset (Membersihkan Form dan Pesan)
tombolReset.addEventListener("click", function () {
    form.reset();
    jumlahKarakter.textContent = maxLength;
    pesanForm.textContent = "";
    pesanForm.className = "";
});

// 3. Validasi dan Submit Form Menggunakan addEventListener
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman reload

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const sesi = sesiInput.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset kelas pesan sebelum validasi ulang
    pesanForm.className = "";

    if (nama === "") {
        pesanForm.textContent = "Nama lengkap wajib diisi.";
        pesanForm.classList.add("error");
        namaInput.focus();
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan format alamat email yang valid.";
        pesanForm.classList.add("error");
        emailInput.focus();
    } else if (sesi === "") {
        pesanForm.textContent = "Silakan pilih salah satu sesi workshop terlebih dahulu.";
        pesanForm.classList.add("error");
        sesiInput.focus();
    } else {
        // Jika Berhasil
        pesanForm.textContent = `Terima kasih, ${nama}! Pendaftaran untuk sesi ${sesi.toUpperCase()} berhasil dikirim.`;
        pesanForm.classList.add("sukses");
        form.reset();
        jumlahKarakter.textContent = maxLength;
    }
});