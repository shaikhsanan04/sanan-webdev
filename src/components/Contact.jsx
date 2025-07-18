import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new opportunities, creative projects, 
              or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:shaikhsanan.04@gmail.com">shaikhsanan.04@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="social-links slide-in-right">
            <h3>Follow Me</h3>
            <div className="social-grid">
              <a 
                href="https://github.com/shaikhsanan04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card glass-card"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/sanan-shaikh-web-developer-web-designer-wordpress-developer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card glass-card"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/SananDesigns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card glass-card"
              >
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;