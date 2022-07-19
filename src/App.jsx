import "./App.css";
import Cards from "./Components/Cards";
import ContactUsForm from "./Components/ContactUsForm";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import TextInformation from "./Components/TextInformation";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ContactUsForm />
      <div className="container">
        <TextInformation />
        <Cards />
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
