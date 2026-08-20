import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import HomeLoanCaseStudy from "./components/HomeLoanCaseStudy";
import SaarathiBazaar from "./components/SaarathiBazaar";
import HTMediaCaseStudy from "./components/HTMediaCaseStudy";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/work/home-loan"
          element={<HomeLoanCaseStudy />}
        />

        <Route
          path="/work/saarathi-bazaar"
          element={<SaarathiBazaar />}
        />

        <Route
          path="/work/ht-media"
          element={<HTMediaCaseStudy />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;