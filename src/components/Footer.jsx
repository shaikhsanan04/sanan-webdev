import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Sanan Shaikh</p>
          <div className="footer-links">
            <a 
              href="https://github.com/shaikhsanan04" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/sanan-shaikh-web-developer-web-designer-wordpress-developer" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://x.com/SananDesigns" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;