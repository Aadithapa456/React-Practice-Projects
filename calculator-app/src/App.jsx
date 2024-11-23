// import React, { useEffect, useState } from "react";
// import NavBar from "./components/NavBar";
// const arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const App = () => {
//   const [count, setCount] = useState(0);
//   // useEffect(() => {
//   //   alert("Hey welcome");
//   // }, []);
//   useEffect(() => {
//     // alert(`Count was changed to ${count} `);
//     console.log(arr[count]);
//   }, [count]);

//   return (
//     <>
//       <NavBar />
//       <div>
//         <button onClick={() => setCount((prevCount) => (prevCount + 1) % arr.length)}>
//           {arr[count]} {count + 1}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <div className="bg-gray-500 h-full w-full flex">
      <Calculator />
    </div>
  );
};

export default App;
