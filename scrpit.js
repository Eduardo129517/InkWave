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

function bleach() {
  window.open('sites-mangas/bleach-manga.html', '_self');
}

function jojolion() {
  window.open('sites-mangas/jojolion-manga.html', '_self');
}

function devilman() {
  window.open('sites-mangas/devilman-manga.html', '_self');
}

function centuryboys() {
  window.open('sites-mangas/20th-century-boys-manga.html', '_self');
}

function pokemon() {
  window.open('sites-mangas/pokemon-manga.html', '_self');
}

function berserk() {
  window.open('sites-mangas/berserk-manga.html', '_self');
}

function bluelock() {
  window.open('sites-mangas/blue-lock-manga.html', '_self');
}

document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById('userIcon');
  const userMenu = document.getElementById('userMenu');

  userIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target) && e.target !== userIcon) {
      userMenu.style.display = 'none';
    }
  });
});