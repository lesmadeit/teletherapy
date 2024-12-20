import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../App.css'; // Custom styles
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const HeroPage = () => {
    const navigate = useNavigate();  // Initialize the navigate hook


  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Functions to handle navigation when buttons are clicked
  const handleLogin = () => {
    navigate('/login');  // Navigate to Login page
  };

  const handleRegister = () => {
    navigate('/register');  // Navigate to Register page
  };

  return (

    <div>
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: 'circle',
            },
            color: {
              value: '#ffffff',
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
          },
        }}
      />
      {/* Top Right Buttons */}
      <div className="auth-buttons">
        <button className="auth-button" onClick={handleLogin}>Login</button>
        <button className="auth-button" onClick={handleRegister}>Sign Up</button>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Welcome to Our Teletherapy Platform</h1>
        <p>
          Our platform offers virtual therapy sessions with licensed therapists. 
          Connect with a professional, get personalized care, and take control of 
          your mental well-being today.
        </p>
        <button className="cta-button" onClick={handleRegister}>Start Therapy</button>
      </div>

      
    </div>

    {/* Key Features Section */}
    <div className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>Connect with licensed therapists online</li>
          <li>Personalized therapy sessions tailored to your needs</li>
          <li>Safe, confidential, and professional support</li>
          <li>Easy-to-use platform with flexible scheduling</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Teletherapy Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HeroPage;
