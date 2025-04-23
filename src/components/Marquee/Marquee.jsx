"use client";

import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Marquee = () => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);

  const items = [
    { id: 1, text: "Client-Centric Approach" },
    { id: 2, text: "Sustainable Practices" },
    { id: 3, text: "High-Quality Craftsmanship" },
    { id: 4, text: "Transparent Communication" },
    { id: 5, text: "Innovative Design Solutions" },
  ];

  // Duplicate items for seamless looping
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = marqueeContentRef.current;

    if (!marquee || !content) return;

    // Calculate total width needed
    const contentWidth = content.scrollWidth / 2; // Since we duplicated the items
    const duration = contentWidth / 50; // Adjust speed by changing the divisor

    // Apply animation through style directly
    content.style.animation = `scroll ${duration}s linear infinite`;

    // Reset position when animation completes to prevent jumps
    const handleAnimationIteration = () => {
      if (content.style.transform === `translateX(-${contentWidth}px)`) {
        content.style.transform = 'translateX(0)';
      }
    };

    content.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      content.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-gray-100 dark:bg-gray-800 py-4">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
      <div ref={marqueeRef} className="relative w-full">
        <div
          ref={marqueeContentRef}
          className="flex items-center whitespace-nowrap"
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center mx-8">
              <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;