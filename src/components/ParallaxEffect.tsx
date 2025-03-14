
import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Speed factor: positive = scroll slower, negative = scroll faster
  className?: string;
}

const ParallaxEffect: React.FC<ParallaxProps> = ({ 
  children, 
  speed = 0.5, 
  className = ""
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate how far the element is from the center of the viewport
        const elementCenter = elementTop + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Apply parallax effect, multiplied by speed factor
        setOffset(distanceFromCenter * speed);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={`parallax-wrapper ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxEffect;
