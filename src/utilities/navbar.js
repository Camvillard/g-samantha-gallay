// file to handle the mobile navigation

function toggleMenu() {
  // variables
  const menuButton = document.querySelector('#toggle-menu');
  const mobileNavigation = document.querySelector('.mobile-menu');

  // functions
  const open = () => {
    mobileNavigation.classList.toggle('hidden');
  }

  // event listeners
  menuButton.addEventListener('click', open)

};

export { toggleMenu };
