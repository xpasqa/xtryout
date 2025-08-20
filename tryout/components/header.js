document.addEventListener("DOMContentLoaded", function () {
const header = `
<header class="bg-[#005aab] shadow-sm">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <a class="navbar-brand" href="dashboard.html">
        <img src="asset/logo.png" alt="Dibaclass Logo" class="h-8">
      </a>

      <!-- Desktop Navigation -->
      <nav class="navbar sticky top-0 z-50 navbar-expand-lg navbar-color-custom hidden md:flex space-x-6 text-sm">
        <a href="/tryout/katalog-paket-tryout.html" class="text-white hover:text-gray-200 transition">Beranda</a>
        <a href="/tryout/paket-saya-sudah-dibeli.html" class="text-white hover:text-gray-200 transition">Paket
          Belajar</a>
        <a href="/tryout/transaksi.html" class="text-white hover:text-gray-200 transition">Transaksi</a>
        <a href="https://api.whatsapp.com/send?phone=6285366818947&text=Hi%2C%20Privat%20Al%20Faiz!%20Saya%20ingin%20bertanya%20nih"
          class="text-white hover:text-gray-200 transition">Bantuan</a>
      </nav>

      <!-- Mobile Toggle -->
      <div class="md:hidden">
        <button id="menu-toggle" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-4 relative group">
        <!-- Avatar dan Dropdown -->
        <div class="relative">
          <button id="avatar-button" class="flex items-center focus:outline-none">
            <img src="asset/user.png" alt="User Avatar"
              class="h-6 w-6 rounded-full cursor-pointer border-0 border-white">
          </button>
          <div id="avatar-dropdown" class="hidden absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50">
            <a href="/tryout/profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
            <a href="https://api.whatsapp.com/send?phone=6285366818947&text=Hi%2C%20Privat%20Al%20Faiz!%20Saya%20ingin%20bertanya%20nih"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bantuan</a>
            <a href="/logout.html" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Keluar</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="md:hidden hidden flex-col mt-4 space-y-2 text-sm">
      <a href="/tryout/katalog-paket-tryout.html" class="block text-white hover:text-gray-200 transition">Beranda</a>
      <a href="/tryout/paket-saya-sudah-dibeli.html" class="block text-white hover:text-gray-200 transition">Paket
        Belajar</a>
      <a href="/tryout/transaksi.html" class="block text-white hover:text-gray-200 transition">Transaksi</a>
      <a href="https://api.whatsapp.com/send?phone=6285366818947&text=Hi%2C%20Privat%20Al%20Faiz!%20Saya%20ingin%20bertanya%20nih"
        class="block text-white hover:text-gray-200 transition">Bantuan</a>
      <div class="border-t border-gray-600 mt-4 pt-4">
        <a href="/tryout/profile.html" class="block text-white hover:text-gray-200 mb-2">Profil</a>
        <a href="https://api.whatsapp.com/send?phone=6285366818947&text=Hi%2C%20Privat%20Al%20Faiz!%20Saya%20ingin%20bertanya%20nih"
          class="block text-white hover:text-gray-200 mb-2">Bantuan</a>
        <a href="/index.html" class="block text-white hover:text-red-400">Keluar</a>
      </div>
    </div>
  </div>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', header);

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

const avatarButton = document.getElementById('avatar-button');
const avatarDropdown = document.getElementById('avatar-dropdown');

avatarButton.addEventListener('click', () => {
avatarDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
if (!avatarButton.contains(e.target) && !avatarDropdown.contains(e.target)) {
avatarDropdown.classList.add('hidden');
}
});
});