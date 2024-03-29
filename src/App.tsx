import './App.css'
import './tailwind.css'
import {Carrousel} from "./seccions/Carrousel";
import {ContactUs} from "./seccions/ContactUs";
import {WhoWeAre} from "./seccions/WhoWeAre";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Maps} from "./seccions/Maps";
import React from "react";

function App() {
  return (
    <main className=''>
        <section className=''>
            <Header />
        </section>
        <section className='h-screen flex flex-col'>
            <Carrousel />
            <WhoWeAre />
            <ContactUs />
            <Maps />
            <Footer />
        </section>
    </main>
  )
}

export default App
