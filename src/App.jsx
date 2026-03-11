import "./App.css";
import { Certificate } from "./Components/Certificate";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";
import About from "./Components/about/About";
import Slider from "./Components/slider/Slider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main className="overflow-x-hidden">
        <Header />
        <LandingPage />
        <About />
        <Slider />
        <Projects />
        <Certificate />
        <ContactMe />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
