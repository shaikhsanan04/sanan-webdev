import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'The Luxury Real Estate, Dubai',
      period: 'Jun 2024 – Jul 2025',
      achievements: [
        'Led the development of high-end real estate websites using WordPress and Wix, enhancing site performance and user engagement.',
        'Partnered with marketing and content teams to integrate SEO tools and dynamic listings, driving a 35% increase in qualified leads.',
        'Revamped the mobile interface to improve load times and responsiveness across devices, reducing bounce rates by 20%.',
        'Oversaw daily maintenance and deployment tasks to ensure uptime, security, and seamless browsing experiences for international clients.'
      ]
    },
    {
      id: 2,
      title: 'Web Designer & Front-End Developer',
      company: 'Adal Agency, Sawantwadi',
      period: 'Jul 2023 – Feb 2024',
      achievements: [
        'Led front-end development for diverse freelance projects, with a focus on scalable React components and reusable design systems.',
        'Collaborated remotely with business owners and backend developers to launch conversion-focused websites.',
        'Integrated GitHub for version control, issue tracking, and streamlined collaboration with third-party teams.',
        'Implemented modern UI enhancements such as animations and transitions to boost user retention and overall brand appeal.'
      ]
    },
    {
      id: 3,
      title: 'Desktop Support Engineer',
      company: 'Dynacons Systems & Solutions (Goa Electronics Ltd.), Goa',
      period: 'Jul 2022 – May 2023',
      achievements: [
        'Administered system updates, software setups, and network troubleshooting for over 100 devices across multiple offices.',
        'Provided technical support to developers and government staff, reducing issue resolution time by 45%.',
        'Introduced documentation practices for IT workflows and troubleshooting guides, improving support efficiency.',
        'Handled backend server tasks, including basic cloud configuration and monitoring, to support ongoing IT operations.'
      ]
    },
    {
      id: 4,
      title: 'Web Designer & Front-End Developer',
      company: 'Adal Agency, Sawantwadi (Freelance Projects)',
      period: 'Mar 2021 – Jun 2022',
      achievements: [
        'Created fully responsive React websites for small businesses, translating design concepts from Figma into production-ready code.',
        'Delivered end-to-end solutions—from initial wireframing to final deployment—tailored to each client\'s branding and goals.',
        'Utilized HTML, CSS, and JavaScript to build smooth, interactive UIs optimized for performance across all devices.',
        'Maintained strong communication with clients, gathering feedback and iterating designs quickly to meet tight deadlines.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title fade-in">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card glass-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <i className="fas fa-check-circle achievement-icon"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;