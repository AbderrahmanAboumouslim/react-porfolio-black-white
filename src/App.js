import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Main from "./components/Main";
import Blog from "./components/Blog";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/skills" element={<MySkills />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
