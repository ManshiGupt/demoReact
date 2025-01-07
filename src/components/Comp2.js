// import React from 'react'

// const Comp2 = ({setCounter}) => {
//     const handleClick=()=>{
//         setCounter(true);
//         setTimeout(() => {
//                 setCounter(false);
//               }, 6000);
//     }
//   return (
//     <div>
//         Comp2
//         {/* {counter} */}
//     <button onClick={handleClick}>grhrtiur5y</button>
//     </div>
//   )
// }

// export default 

// import React from 'react'

// const Comp2 = ({dark}) => {
//   return (
//     <div style={{background:dark?"red":"blue", padding:dark?6:10}}>gtrkjhtrkghtjrtjhghhkjg</div>
//   )
// }

// export default Comp2

// import React, { useContext } from 'react'
// import myContext from './Context';


// const Comp2 = () => {
//   const{text, setText}= useContext(myContext);
//   return (
//     <div>
//       <button onClick={()=>setText("rtrgyr")}>vfhgfe</button>
//       {text}
//     </div>
//   )
// }

// export default Comp2


// ThemeToggle.js
import React from "react";
import { useTheme } from "./Context";

const Comp2 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default Comp2;
