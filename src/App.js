// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// import Timer from './components/Timer';
// import Comp1 from './components/Comp1';
// import Comp2 from './components/Comp2';

// function App() {
//   const[counter, setCounter]= useState(false);
//   const handleClick=()=>{
//     alert("fjhurguerj");
// }
//   return (
//     <div>
//       {/* <h1>count</h1>
//       <h1>{counter}</h1> */}
//       {/* <Timer counter={counter}/> */}
//       <Comp1 counter={counter} handleClick={handleClick}/>
//       <Comp2 setCounter={setCounter} />
//       {/* <button onClick={()=>handleClick()}>click</button> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Comp1 from "./components/Comp1";
// import Comp3 from "./components/Comp3";
// import Comp4 from "./components/Comp4";
// import Comp2 from "./components/Comp2";

// const App = () => {
//   const [isSelected, setIsSelected] = useState(0);
//   const s = ["gd", "hdud", "dg", "hsdfugf"];
//   const ram = ( index ) => {
//     switch (index) {
//       case 0:
//         return <Comp1 />;
       
//       case 1:
//         return <Comp2 />;
       
//       case 2:
//         return <Comp3 />;
        
//       case 3:
//         return <Comp4 />;
       
//     }
//   };
//   return (
//     <div>
//       App
//       <Sidebar s={s} isSelected={isSelected} setIsSelected={setIsSelected} />
//       {/* <ram index={isSelected} /> */}
//       {ram(isSelected)}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react'
// import Comp2 from './components/Comp2';

// const App = () => {
//   const[dark, setDark]= useState(false);

// const handleClick=()=>{
//   setDark(!dark)
// }
//   return (
//     <div>
//       App
//       <button onClick={handleClick} >click to change mode</button>
//       <Comp2 dark={dark}/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Comp2 from './components/Comp2'
// import myContext from './components/Context'
// const App = () => {
//   const[text, setText]= useState("");
//   return (
//     <div>
//       <myContext.Provider value={{text, setText}}>
//       <Comp2/>
//       </myContext.Provider>
//     </div>
//   )
// }

// export default App

// App.js
// import React from "react";
// import { useTheme } from "./components/Context";
// import Comp2 from "./components/Comp2";

// const App = () => {
//   const { theme } = useTheme();

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         background: theme === "light" ? "#f9f9f9" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//       }}
//     >
//       <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
//       <Comp2 />
//     </div>
//   );
// };

// export default App;




// import React from 'react'
// import Navbar from './components/Navbar'
// import Cards from './components/Cards'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Cards/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Cards />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
