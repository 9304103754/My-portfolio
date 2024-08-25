// import React from "react";
// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
// import About from "./Components/About";
// import Project from "./Components/Project";
// import Skill from "./Components/Skill";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";



// function App() {
//   return (
//     <>
//       <main className="text-gray-400 bg-gray-900 body-font">
//       <Header />
//       <Hero/>
//       <About />
//       <Project />
//       <Skill />
//       <Contact/>
//       <Footer />
//     </main>
//     </>
//   );
// }

// export default App;






import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="text-gray-400 bg-gray-900 body-font">
        <section id="home"><Hero /></section>
        <section id="About"><About /></section>
        <section id="Project"><Project /></section>
        <section id="Skill"><Skill /></section>
        <section id="Contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
