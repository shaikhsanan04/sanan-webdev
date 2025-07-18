// import { useState, useEffect } from 'react';
// import ThemeToggle from './ThemeToggle';
// import './Header.css';

// const Header = ({ theme, toggleTheme }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
//       <div className="container">
//         <div className="header-content">
//           <div className="logo">
//             <h2>Sanan Shaikh</h2>
//           </div>
          
//           <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
//             <ul className="nav-links">
//               <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
//               <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
//               <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
//               <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
//               <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
//             </ul>
//           </nav>

//           <div className="header-actions">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//             <button 
//               className="menu-toggle"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Sanan Shaikh</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;