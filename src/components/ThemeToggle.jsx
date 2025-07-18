import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="theme-toggle-inner">
        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </div>
    </button>
  );
};

export default ThemeToggle;