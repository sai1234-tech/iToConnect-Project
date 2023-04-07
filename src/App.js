import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import  Campaign from './Components/Campaign'
import Features from './Components/Features'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Campaign/>
     <Features/>
     <About/>
     <Contact/>

     <Footer/>
    </div>
  );
}

export default App;
