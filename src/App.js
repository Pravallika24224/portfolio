import { useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const resumeRef = useRef()
  const worksRef = useRef()
  const contactRef = useRef()
  return (
    <div className="h-full pt-14 2xl:px-36 xl:px-24 lg:px-14 md:px-14 sm:px-6 bg-gray-50">
      <Header homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} worksRef={worksRef} contactRef={contactRef} />
      <div className="mt-12">
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Resume ref={resumeRef}/>
      <Works ref={worksRef}/>
      <Contact ref={contactRef}/>
      </div>
    </div>
  );
}

export default App;
