import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add cursor tracking with better performance
    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    // Add hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .project-card, .skill-card, .experience-card, .social-card, .contact-item, .tab-button, .menu-toggle, .theme-toggle, [role="button"], input, textarea'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });

      return interactiveElements;
    };

    const interactiveElements = addHoverListeners();

    // Re-add listeners when new elements are added to DOM
    const observer = new MutationObserver(() => {
      const newElements = addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-hand">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 11V6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V11M9 11V16C9 17.1046 9.89543 18 11 18H16C17.1046 18 18 17.1046 18 16V13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V11M9 11V9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9V11M16 11V9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V11M16 11V7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7V11M14 11V8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8V11" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;