import './App.css'
import {Carrousel} from "./seccions/Carrousel";
import {ContactUs} from "./seccions/ContactUs";
import {WhoWeAre} from "./seccions/WhoWeAre";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Carrousel />
        <ContactUs/>
        <WhoWeAre/>
        <Footer/>
    </div>
  )
}

export default App
