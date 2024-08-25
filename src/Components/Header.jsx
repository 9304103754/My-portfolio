// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import './Header.css';

// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => setToggle(!toggle);

//   return (
//     <header className="flex justify-between items-center px-5 py-2 bg-primary text-white fixed top-0 left-0 right-0 z-10">
//       <a href="/" className="logo text-3xl font-bold text-name">
//         <h1>Binit Kumar Jha</h1>
//       </a>

//       {/* Desktop Nav */}
//       <nav className="hidden md:flex justify-center flex-grow">
//         <ul className="flex justify-around space-x-6">
//           <li>
//             <a href="/" className="hover:text-yellow-400 active:text-red-600">Home</a>
//           </li>
//           <li>
//             <a href="#About" className="hover:text-yellow-400 active:text-red-600">About</a>
//           </li>
//           <li>
//             <a href="#Project" className="hover:text-yellow-400 active:text-red-600">Project</a>
//           </li>
//           <li>
//             <a href="#Skill" className="hover:text-yellow-400 active:text-red-600">Skill</a>
//           </li>
//           <li>
//             <a href="#Contact" className="hover:text-yellow-400 active:text-red-600">Contact</a>
//           </li>
//         </ul>
//       </nav>

//      {/* Resume Button */}
//      <a href="#resume-link" download="binit_resume.pdf" className="ml-auto mr-5 md:mr-0">
//   <button className="bg-yel
//   low-400 hover:bg-red-500 text-white font-semibold hover:text-white py-3 px-6 md:py-2 md:px-4 border border-white hover:border-transparent rounded-full shadow-md">
//    My Resume
//   </button>
// </a>

//       {/* Toggle Button */}
//       <button onClick={handleToggle} className="block md:hidden">
//         {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
//       </button>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary text-white fixed top-0 left-0 right-0 z-10">
      <a href="/" className="logo text-3xl font-bold text-name">
        <h1>Ravi Kumar Jha</h1>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center flex-grow">
        <ul className="flex justify-around space-x-6">
          <li>
            <a href="#home" className="hover:text-yellow-400 active:text-red-600">Home</a>
          </li>
          <li>
            <a href="#About" className="hover:text-yellow-400 active:text-red-600">About</a>
          </li>
          <li>
            <a href="#Project" className="hover:text-yellow-400 active:text-red-600">Project</a>
          </li>
          <li>
            <a href="#Skill" className="hover:text-yellow-400 active:text-red-600">Skill</a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-yellow-400 active:text-red-600">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Resume Button */}
      <a href="https://drive.google.com/file/d/1HkJBdPzXG19n_i_lDW0LBGDuLyDhjeXU/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="ml-auto mr-5 md:mr-0">
        <button className="bg-yellow-400 hover:bg-red-500 text-white font-semibold hover:text-white py-3 px-6 md:py-2 md:px-4 border border-white hover:border-transparent rounded-full shadow-md">
          My Resume
        </button>
      </a>

      {/* Toggle Button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;


