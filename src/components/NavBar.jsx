import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isNavbarSticky, setNavbarSticky] = useState(false);

  const handleNavLinkClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setNavbarSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id='navbar'
      className={`bg-black p-5 font-light text-center ${
        isNavbarSticky ? 'sticky top-0 z-20' : 'relative'
      }`}
    >
      <div className=" mx-auto text-white text-1xl">
        <div className="flex items-left justify-between">
          <div className="space-x-7 text-xl">
            <button
              onClick={() => handleNavLinkClick('about')}
              className="hover:text-purple-500 focus:outline-none"
            >
              Sobre mi
            </button>
            <button
              onClick={() => handleNavLinkClick('projects')}
              className="hover:text-purple-500 focus:outline-none"
            >
              Proyectos
            </button>
            <button
              onClick={() => handleNavLinkClick('education')}
              className="hover:text-purple-500 focus:outline-none"
            >
              Educación
            </button>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className="hover:text-purple-500 focus:outline-none"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
