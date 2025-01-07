import React from "react";

const Sidebar = ({ s, isSelected, setIsSelected }) => {
  // const handleClick=()=>{
  //     alert("dghd");
  //     setIsSelected(true);
  // }
  return (
    <div>
      dutwd
      {s.map((data, i) => (
        <div key={i}>
          {/* <button>hfejfu</button> */}
          <button
            // className={
            //   isSelected === i
            //     ? "p-4 bg-blue-500 text-white"
            //     : "p-4 bg-gray-200"
            // }
           style={isSelected === i?h:k}
            onClick={() => setIsSelected(i)}
          >
            {data}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


const h={
  color:"red", padding:8
}
const k={
  color:"blue", padding:4
}
