const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


//show Side Navigation bar
 function showSidenav() {
      const sidenav = document.querySelector('.sidenav');
      sidenav.style.display = 'flex';
    }

  function hideSidenav() {
      const sidenav = document.querySelector('.sidenav');
      sidenav.style.display = 'none';
    }