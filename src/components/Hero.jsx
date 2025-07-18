import './Hero.css';
import tempImg from '../assets/temp.png';


const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <h1>
              Hi, I'm <span className="highlight">Sanan Shaikh</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer & Web Designer crafting digital experiences
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Projects
              </button>
              <a
                href="/sanan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sanan_Shaikh_Resume.pdf"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image slide-in-right">
            <div className="image-container">
              <img
                src={tempImg}
                alt="Sanan Shaikh"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
