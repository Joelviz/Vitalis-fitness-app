import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';

const FitnessApp = () => {
  useEffect(() => {
    // Mouse tracking
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log(`Mouse Position: ${clientX}, ${clientY}`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Fitness App</h1>
      <div className="sections">
        <section id="nutrition">
          <h2>Nutrition</h2>
          <p>Details about nutrition...</p>
        </section>
        <section id="exercise">
          <h2>Exercise</h2>
          <p>Details about exercise...</p>
        </section>
        <section id="wellness">
          <h2>Wellness</h2>
          <p>Details about wellness...</p>
        </section>
        <section id="lifestyle">
          <h2>Lifestyle</h2>
          <p>Details about lifestyle...</p>
        </section>
      </div>
      <Canvas>
        {/* Three.js animations go here */}
      </Canvas>
    </div>
  );
};

export default FitnessApp;