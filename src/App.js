
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Head from "./components/Head"
import Promotion from "./components/Promotion"
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Head />
       <Navbar />
       <Header />
       <Promotion />
       <Pricing />
       <Footer  />
    </div>
  );
}

export default App;
