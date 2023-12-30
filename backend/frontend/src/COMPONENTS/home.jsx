import { useEffect } from "react";
import "../CSS/home.css";
import img from "../ICONS/photo.png";
import github from "../ICONS/github.png";
import linkedin from "../ICONS/linkedin.png";
import instagram from "../ICONS/instagram.png";

import NavBar from "./navBar.jsx";
import AboutMe from "./aboutme.jsx";
import Education from "./education.jsx";
import Skills from "./skills.jsx";
import Services from "./services.jsx";
import ContactMe from "./contact.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {    
    const nav = useNavigate();

    useEffect(() => {
        let text = document.querySelectorAll(".home__wrapper .left h4 span");
        let cursor = document.querySelector(".home__wrapper .left h4 .cursor");

        let i = 0;
        setInterval(() => {
            i < text.length - 1 ? text[i++].style.display = "inline" : "";
        }, 150)
        cursor.classList.add("blink");
    }, [])
    return (
        <>
            <NavBar />
            <section className="home__wrapper" id="home">
                <div className="left">
                    <h4>Hello, It's Me</h4>
                    <h1 style={{ color: "aqua" }}>Siva Sankar Sahoo</h1>
                    <h4>And I'm a
                        <span> F</span>
                        <span>u</span>
                        <span>l</span>
                        <span>l</span>
                        <span> </span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k</span>
                        <span> </span>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span className="cursor"></span>
                    </h4>
                    <p>I have specialization in backend and frontend development. I am a logical and motivated Full Stack Developer having 2+ years of experience who loves to develope eye catching and user-friendly websites and to handle server-side problems.</p>
                    <div>
                        <a href="https://github.com/Sivasankar-igc" target="_blank"><img src={github} /></a>
                        <a href="https://www.linkedin.com/in/siva-sankar-sahoo-6b648a23a/" target="_blank" ><img src={linkedin} /></a>
                        <a href="https://www.instagram.com/siva_sankar_sahoo/" target="_blank"><img src={instagram} /></a>
                    </div>
                    <div className="btn"><button onClick={()=>nav("/latestProject")}>LATEST PROJECTS</button></div>
                </div>
                <div className="right">
                    <img src={img}/>
                </div>
            </section>
            <AboutMe />
            <Education />
            <Skills />
            <Services />
            <ContactMe />
        </>
    )
}

export default Home;