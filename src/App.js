import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  const [buttonClicked, setButtonClicked] = useState('Home')

  return (
    <div className="h-screen pl-52 pr-44 pt-14 bg-gradient-to-r from-purple-300 to-pink-300">
      <Header setButtonClicked = {setButtonClicked}/>
      <div className="mt-20">
      {buttonClicked === 'Home' && <Home/>}
      {buttonClicked === 'About' && <About/>}
      {buttonClicked === 'Resume' && <Resume/>}
      {buttonClicked === 'Works' && <Works/>}
      {buttonClicked === 'Contact' && <Contact/>}
      </div>
    </div>
  );
}

export default App;
