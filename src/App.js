// Essencials
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

// Hooks
import { usePersistedState } from "./hooks/usePersistedState";

// GlobalStyle - Themes
import { GlobalStyles } from "./styles/Global";
import LightTheme from "./styles/themes/lightTheme";
import DarkTheme from "./styles/themes/darkTheme";

// Pages Components
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";

// Variables Local
const LIGHT = "light";
const DARK = "dark";
const THEME = "theme";

function App() {
  // Get Themes
  const [theme, setTheme] = usePersistedState(THEME, LIGHT);

  // Functions Toggle Theme Light/Dark
  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };

  return (
    <ThemeProvider theme={theme === LIGHT ? LightTheme : DarkTheme}>
      <HelmetProvider>
        <GlobalStyles />
        <BrowserRouter>
          <NavBar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
