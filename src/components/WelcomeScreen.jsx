import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo.astro"; // Asegúrate que este esté adaptado a React o conviértelo si es necesario

function WelcomeScreen({ onFinish }) {
  const [startExit, setStartExit] = useState(false);

  const handleEnter = () => {
    setStartExit(true);
    setTimeout(() => {
      onFinish();
    }, 1000); // Espera a que termine la animación
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center px-4"
        initial={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        animate={
          startExit
            ? { scale: 1.2, opacity: 0, filter: "blur(20px)" }
            : { scale: 1, opacity: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <Logo />
        </motion.div>
        <motion.h2
          className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Bienvenido a General Lab
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-gray-700 dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Distribuidor exclusivo en el sureste de México
        </motion.p>
        <motion.button
          onClick={handleEnter}
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Entrar al sitio
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
