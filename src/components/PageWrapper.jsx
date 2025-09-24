import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoReact from './LogoReact.jsx';
import ImageCarousel from './ImageCarousel.astro';

const WelcomeScreen = ({ onFinish }) => {
  const [startRipple, setStartRipple] = useState(false);
  const [startExit, setStartExit] = useState(false);

  const handleEnter = () => {
    // Primero activamos el efecto de ondas
    setStartRipple(true);
    
    // Después de un tiempo para ver las ondas, iniciamos la transición de salida
    setTimeout(() => {
      setStartExit(true);
      
      // Y finalmente, después de la animación de desvanecimiento, completamos la acción
      setTimeout(() => {
        onFinish();
      }, 1000);
    }, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: startExit ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: startExit ? 50 : 0, 
          opacity: startExit ? 0 : 1,
          scale: startRipple ? 1.05 : 1
        }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <div className={`mx-auto mb-6 ${startRipple ? 'ripple-container' : ''}`}>
          <LogoReact className="mx-auto" size="lg" />
        </div>
        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
          Bienvenido a General Lab
        </h2>
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
          Distribuidor exclusivo en el sureste de México
        </p>
        <button
          onClick={handleEnter}
          disabled={startRipple}
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
        >
          {startRipple ? 'Entrando...' : 'Entrar al sitio'}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default function PageWrapper() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!showMain && <WelcomeScreen onFinish={() => setShowMain(true)} />}
      </AnimatePresence>
      {showMain && (
        <main class="container mx-auto px-4 py-12 fade-in">
        <section class="text-center mb-20">
          <h1 class="mb-8 text-7xl font-extrabold leading-tight tracking-tight text-black md:text-5xl lg:text-5xl dark:text-white">
            <span class="text-blue-700 dark:text-blue-500">Brindando Soluciones</span>
          </h1>
          <p class="mb-6 text-xl font-normal text-gray-600 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Somos una empresa respaldada con más de 18 años de experiencia, creada con el fin de satisfacer las necesidades en las áreas de laboratorio, distribuidor exclusivo de diferentes marcas en el sureste de la República Mexicana.
          </p>
          <p class="mb-6 text-xl font-normal text-gray-600 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Asumimos la responsabilidad de ofrecer productos de la más alta calidad incorporando los avances de la tecnología.
          </p>
          <p class="mb-10 text-xl font-normal text-gray-600 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
            Nuestros productos son desarrollados bajo las normas de calidad y certificaciones de la NOM, DOT, SSA, CE, ISO 9001:2000, entre otras.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
             
          </div>
        </section>
      </main>
    
      )}
    </>
  );
}
  