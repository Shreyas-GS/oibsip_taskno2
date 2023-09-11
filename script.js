
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
  const navLinks = document.querySelectorAll('.nav-link');
  const contactButton = document.querySelector('.btn-dark');
  const aboutButton = document.querySelector('.btn-outline-secondary');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSectionId = e.target.getAttribute('data-section-id');
      scrollToSection(targetSectionId);
    });
  });
  contactButton.addEventListener('click', () => {
    scrollToSection('contact');
  });

  aboutButton.addEventListener('click', () => {
    scrollToSection('about');
  });

