import './App.css'
import {Header} from "@/layout/header/Header";
import {Home} from "@/pages/Home";
import {About} from "@/pages/About";
import {Education} from "@/pages/Education";
import {Pricing} from "@/pages/Pricing";
import {Contact} from "@/pages/Contact";


function App() {
  return (
    <>
<Header/>
        <Home/>
        <About/>
        <Education/>
        <Pricing/>
        <Contact/>
    </>
  )
}

export default App
