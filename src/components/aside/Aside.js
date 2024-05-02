import React , { useState, useEffect } from 'react'
import "./aside.scss"

import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const Aside = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const sidebar = document.querySelector("aside");
    const sidebarToggle = document.querySelector(".hamburger");

    const handleToggleSidebar = () => {
      setIsSidebarOpen((prevState) => !prevState);
    };

    sidebarToggle.addEventListener("click", handleToggleSidebar);

    return () => {
      sidebarToggle.removeEventListener("click", handleToggleSidebar);
    };
  }, []); 

  useEffect(() => {
    const sidebar = document.querySelector("aside");

    if (window.innerWidth <= 1000) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }

    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setIsSidebarOpen(false);
        sidebar.classList.add("close");
      } else {
        setIsSidebarOpen(true);
        sidebar.classList.remove("close");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <aside className={isSidebarOpen ? "" : "close"}>
      <nav>
        <a href="" class="logo-link">
          <h1 class="title">Admin</h1>
          <h1 class="close-title">A</h1>
        </a>
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa-solid fa-house"></i><span>Link 1</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa-solid fa-house"></i><span>Link 2</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa-solid fa-house"></i><span>Link 5</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa-solid fa-house"></i><span>Link 6</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="bottom-list">
        <button class="mode-btn">
          <IoSettingsSharp/>
          <span>Settings</span>
        </button>
        <button class="logout-btn">
          <LuLogOut/>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Aside