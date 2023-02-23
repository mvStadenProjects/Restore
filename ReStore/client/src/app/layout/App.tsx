import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";

import Catalogue from "../../features/Catalogue/Catalogue";
import ProductDetails from "../../features/Catalogue/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";

import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
