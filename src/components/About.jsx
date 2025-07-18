import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-image slide-in-left">
            <div className="image-wrapper">
              <img 
                src="src/assets/about-section-image-design.png"
                alt="Sanan Shaikh working"
                className="about-img"
              />
            </div>
          </div>
          
          <div className="about-text slide-in-right">
            <div className="text-content">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate full-stack developer and web designer with a love for creating 
                digital experiences that make a difference. With expertise in modern web technologies 
                and a keen eye for design, I bring ideas to life through code.
              </p>
              
              <h3>What I Do</h3>
              <p>
                I specialize in building responsive web applications using React, developing 
                custom WordPress solutions, and creating stunning websites on platforms like Wix. 
                My approach combines technical excellence with creative problem-solving.
              </p>
              
              <h3>What I Love Building</h3>
              <p>
                From interactive web applications to sleek business websites, I enjoy crafting 
                solutions that not only look great but also provide exceptional user experiences. 
                Every project is an opportunity to push boundaries and learn something new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
