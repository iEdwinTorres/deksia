import './App.css';
import Header from "./Components/1-Header";
import Hero from "./Components/2-Hero";
import Style1 from "./Components/3-Style1";
import Benefits from "./Components/4-Benefits";
import Services from "./Components/5-Service";
import Style2 from "./Components/6-Style2";
import Graph from "./Components/7-Graph";
import Testimonials from "./Components/8-Testimonial";
import FAQ from "./Components/9-FAQ";
import Footer from "./Components/10-Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Style1/>
      <Benefits/>
      <Services/>
      <Style2/>
      <Graph/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
