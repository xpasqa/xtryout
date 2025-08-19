document.addEventListener("DOMContentLoaded", function () {
const styles = `
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            onest: ['"Onest"', 'sans-serif'],
          },
        },
      },
    };
  </script>
`;

const footerContainer = document.getElementById("styles");
if (footerContainer) {
footerContainer.innerHTML = styles;
}
});