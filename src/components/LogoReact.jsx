import React, { useState, useEffect } from 'react';
import logoImage from '../assets/img/ed8a8707-b716-4c6c-83d5-96eb17eda4bf-removebg-preview.png';

const LogoReact = ({ className = "", size = "md", href = "/" }) => {
  const [animate, setAnimate] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  // Mapeo de tamaños
  const sizes = {
    sm: { width: 80, height: 32 },
    md: { width: 120, height: 40 },
    lg: { width: 160, height: 56 },
  };

  const { width, height } = sizes[size] || sizes.md;

  // Iniciar la animación cuando se monta el componente en la pantalla de bienvenida
  useEffect(() => {
    setAnimate(true);
    
    // Programar el desvanecimiento después de que terminen las ondas
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <a href={href} className={`inline-block relative ${className}`}>
      <div className="relative">
        <img 
          src={logoImage.src}
          width={width}
          height={height}
          alt="Logo General Lab" 
          className={`object-contain ${fadeOut ? 'opacity-70' : 'opacity-100'} transition-opacity duration-1000`}
          loading="eager"
        />
        
        {/* Ondas de agua */}
        {animate && (
          <>
            <div className="water-ripple ripple-1"></div>
            <div className="water-ripple ripple-2"></div>
            <div className="water-ripple ripple-3"></div>
          </>
        )}
      </div>
      
      <style>{`
        .water-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(201, 235, 255, 0);
          box-shadow: 0 0 10px rgba(201, 235, 255, 0.5);
          border: 2px solid rgba(201, 235, 255, 0.7);
          opacity: 1;
          z-index: -1;
        }
        
        .ripple-1 {
          animation: ripple 2s ease-out;
        }
        
        .ripple-2 {
          animation: ripple 2s ease-out 0.3s;
        }
        
        .ripple-3 {
          animation: ripple 2s ease-out 0.6s;
        }
        
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          50% {
            width: ${width * 1.5}px;
            height: ${height * 1.5}px;
            opacity: 0.5;
          }
          100% {
            width: ${width * 2.5}px;
            height: ${height * 2.5}px;
            opacity: 0;
          }
        }
      `}</style>
    </a>
  );
};

export default LogoReact;