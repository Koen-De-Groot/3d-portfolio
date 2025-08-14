import Navbar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <Contact />
    <Footer />
  </>
);

export default App;
