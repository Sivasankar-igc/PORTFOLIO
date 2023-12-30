import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/home";
import LatestProject from "./COMPONENTS/latestProject";
import BuildProject from "./COMPONENTS/buildProject";
import HireMe from "./COMPONENTS/hireMe";

const App = () => {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".links ul li a");

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top > offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            document.querySelector(`.links ul li a[href*=${id}]`).classList.add("active");
          })
        }
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="latestProject" element={<LatestProject />} />
        <Route path="buildProject" element={<BuildProject/>}/>
        <Route path="hireMe" element={<HireMe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;