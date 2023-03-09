import './App.css'
import './tailwind.css'
import {Carrousel} from "./seccions/Carrousel";
import {ContactUs} from "./seccions/ContactUs";
import {WhoWeAre} from "./seccions/WhoWeAre";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <main>
        <section className='h-18'>
            <Header />
        </section>
        <section className='flex flex-col mt-21'>
            <Carrousel />
            <ContactUs />
            <WhoWeAre />
            <Footer />
        </section>
    </main>
  )
}

export default App
