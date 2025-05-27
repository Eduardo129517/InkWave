window.onscroll = function () {
  navbRolagem();
};

function navbRolagem() {
  const navbar = document.getElementById("navbar");
  const logoText = document.getElementById("logoText");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.background = "rgba(0, 0, 0, 0.85)";
    logoText.style.opacity = "0";
  } else {
    navbar.style.background = "transparent";
    logoText.style.opacity = "1";
  }
}