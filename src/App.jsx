import "./App.css";
import ContactUsForm from "./Components/ContactUsForm";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import TextInformation from "./Components/TextInformation";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ContactUsForm/>
      <TextInformation/>

      <Footer/>
    </div>
  );
}

export default App;
