// App.js
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

// Components
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();

  // Check if the current location is the landing page
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
        <Routes>
        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<MySkillsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        
      </Routes>
      </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
