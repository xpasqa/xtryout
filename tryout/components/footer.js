document.addEventListener("DOMContentLoaded", function () {
const footer = `
<footer class="bg-[#005aab] text-white py-12 text-lg">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        <!-- Logo + Description -->
        <div class="md:col-span-2 md:pr-16">
            <img src="/asset/logo.png" alt="Dibaclass Logo" class="mb-4 h-10">
            <p class="leading-relaxed text-sm">
                Penyedia layanan bimbel online untuk persiapan UTBK-SNBT, Ujian Mandiri, SKD CPNS & Kedinasan, RB BUMN,
                dan PPPK dengan pembelajaran berkualitas.
            </p>
            <div class="flex gap-4 mt-4 text-white text-lg">
                <a href="#"><i class="fab fa-tiktok"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>

        <!-- Explore -->
        <div>
            <h4 class="font-semibold mb-4 text-base">EXPLORE</h4>
            <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:underline">Tentang Kami</a></li>
                <li><a href="#" class="hover:underline">Testimonials</a></li>
                <li><a href="#" class="hover:underline">Paket Belajar</a></li>
            </ul>
        </div>

        <!-- Layanan -->
        <div>
            <h4 class="font-semibold mb-4">LAYANAN</h4>
            <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Layanan Customer 1</a></li>
                <li><a href="#" class="hover:underline">Layanan Customer 2</a></li>
                <li><a href="#" class="hover:underline">Syarat & Ketentuan</a></li>
            </ul>
        </div>

    </div>

    <div class="border-t border-white mt-12 pt-6 text-center text-sm">
        © Copyright 2025, All Rights Reserved by PT Digdaya Bahagia Indonesia
    </div>
</footer>
`;

const footerContainer = document.getElementById("footer");
if (footerContainer) {
footerContainer.innerHTML = footer;
}
});