import About from "./component/About";
import Home from "./component/Home";
import MyNavbar from "./component/Navbar";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
