// App.js
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

import BrandLandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/Main.jsx";
import IPsPage from "./pages/IPsPage";
import SoulDwellerPage from "./pages/SoulDwellerPage";
import CharactersPage from "./pages/CharactersPage";
import LorePage from "./pages/LorePage";
import ProjectsPage from "./pages/ProjectsPage";
import AssetsPage from "./pages/AssetsPage";
import BrandPage from "./pages/BrandPage";
import ArchivePage from "./pages/ArchivePage";
import SoundBar from "./subComponents/SoundBar";
import OverviewPage from "./pages/OverviewPage.jsx"

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<BrandLandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/ips" element={<IPsPage />} />
            <Route path="/ips/soul-dweller" element={<SoulDwellerPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/lore" element={<LorePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/archive" element={<ArchivePage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;