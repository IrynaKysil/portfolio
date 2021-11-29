import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
