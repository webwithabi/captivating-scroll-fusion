
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({
  end,
  duration = 2,
  decimals = 0
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const countRef = useRef({ start: 0, end, current: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    countRef.current = { start: 0, end, current: 0 };
  }, [end]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const step = 1 / (duration * 60); // 60fps
      const totalSteps = Math.floor(duration * 60);
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / totalSteps;
        const easedProgress = easeOutQuart(progress);
        const nextCount = Math.min(countRef.current.start + (end - countRef.current.start) * easedProgress, end);
        
        setCount(nextCount);
        
        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setCount(end);
        }
      }, 1000 / 60);
      
      return () => clearInterval(interval);
    }
  }, [isInView, end, duration, hasAnimated]);

  // Easing function for smooth animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return <span ref={ref}>{formatNumber(count)}</span>;
};

export default CounterAnimation;
