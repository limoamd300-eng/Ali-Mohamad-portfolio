import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Hero from './components/Hero';
import Vault from './components/Vault';
import Contact from './components/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero setActivePage={setActivePage} />;
      case 'vault':
        return <Vault />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="scanline" />
      </div>

      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
