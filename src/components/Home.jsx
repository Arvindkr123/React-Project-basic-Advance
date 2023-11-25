import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
function Home() {
  let { openModel, openSidebar } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn" onClick={openModel}>
        show modal
      </button>
    </main>
  );
}

export default Home;
