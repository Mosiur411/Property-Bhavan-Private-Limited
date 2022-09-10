import Home from "./component/Pages/Home/Home";
import Footer from "./component/Shared/Footer";
import Navbar from "./component/Shared/Navbar";

function App() {
  return (
    <div style={{fontFamily: 'Montserrat'}}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
