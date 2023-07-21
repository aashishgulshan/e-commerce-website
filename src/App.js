import Navbar from "./components/Navbar";
import ProductComponent from "./components/ProductComponent";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";


export default function App() {
  return (
    <div>
      <Navbar />
      <ProductComponent />
      <ContactForm />
      {/* <Contact/> */}
      <Footer />
    </div>
  )
}