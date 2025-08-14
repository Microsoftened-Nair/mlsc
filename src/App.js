
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Vision from './components/Vision';
import Benefits from './components/Benefits';
import Apply from './components/Apply';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Theme context (light/dark)
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }, []);

  const ctxValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  const Section = ({ name, children }) => (
    <Element name={name}>
      <AnimatePresence mode="wait">
        <motion.section
          key={name}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          exit="exit"
          className="app-section"
        >
          {children}
        </motion.section>
      </AnimatePresence>
    </Element>
  );

  return (
    <ThemeContext.Provider value={ctxValue}>
      <div className={`App ${theme}`}>
        <Navbar />
        <Section name='home'><Home /></Section>
        <Section name='events'><Events /></Section>
        <Section name='about'><About /></Section>
        <Section name='vision'><Vision /></Section>
        <Section name='benefits'><Benefits /></Section>
        <Section name='apply'><Apply /></Section>
        <Section name='contact'><Contact /></Section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
