import { useEffect } from "react";
import "../CSS/navBar.css";
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const nav = useNavigate();
    useEffect(() => {
        const listElem = document.querySelectorAll(".links ul li");
        const headerName = document.querySelectorAll("#header p span");
        const btn = document.querySelector(".nav__bar__wrapper button");
        const anchor = document.querySelectorAll(".links ul li a");
        const hamAnchor = document.querySelectorAll("#ham-menu li a");

        if (listElem.length > 0) {
            let i = 0;
            setInterval(() => {
                if (i < listElem.length) {
                    listElem[i++].classList.add("afterEffect")
                }
            }, 100)
        }
        if (headerName.length > 0) {
            let i = 0;
            setInterval(() => {
                if (i < headerName.length) {
                    headerName[i++].classList.add("afterEffect")
                }
            }, 150)
        }
        if (btn != null) {
            let i = 0;
            setInterval(() => {
                if (i < 10) {
                    if (i % 2 == 0) {
                        btn.style.opacity = "0";
                        i++;
                    } else {
                        btn.style.opacity = "1";
                        i++;
                    }
                }
            }, 150)
        }

        anchor.forEach((a, index) => {
            a.addEventListener("click", () => {
                for (let index = 0; index < 6; index++) {
                    anchor[index].classList.remove("active");
                }
                a.classList.add("active");
            })
        })

        hamAnchor.forEach((a, index) => {
            a.addEventListener("click", () => {
                for (let index = 0; index < 6; index++) {
                    hamAnchor[index].classList.remove("active");
                }
                a.classList.add("active");
            })
        })
    }, [])
    const showMenu = () => {
        document.querySelector(".nav__bar__wrapper .hamburger #ham-menu").classList.toggle("show__menu");
        let lists = document.querySelectorAll(".nav__bar__wrapper .hamburger #ham-menu li");
        let i = 0;
        let time = setInterval(() => {
            i < 6 ? lists[i++].classList.toggle("slide") : clearInterval(time)
        }, 100)
    }
    return (
        <>
            <section className="nav__bar__wrapper">
                <div id="header">
                    <p>
                        <span>P</span>
                        <span>O</span>
                        <span>R</span>
                        <span>T</span>
                        <span>F</span>
                        <span>O</span>
                        <span>L</span>
                        <span>I</span>
                        <span>O</span>
                    </p>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#home" className="active">Home <span></span></a></li>
                        <li><a href="#about">AboutMe <span style={{ left: "18%" }}></span></a></li>
                        <li><a href="#education">Education <span style={{ left: "17%" }}></span></a></li>
                        <li><a href="#skills">Skills <span></span></a></li>
                        <li><a href="#service">Services <span style={{ left: "19%" }}></span></a></li>
                        <li><a href="#contact">Contact Me <span style={{ left: "16%" }}></span></a></li>
                    </ul>
                </div>
                <button onClick={()=>nav("/hireMe")}>Hire Me</button>
                <div className="hamburger">
                    <ul onClick={() => showMenu()}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul id="ham-menu">
                        <li><a href="#home" className="active">Home <span style={{ left: "31%" }}></span></a></li>
                        <li><a href="#about">AboutMe <span style={{ left: "26%" }}></span></a></li>
                        <li><a href="#education">Education <span style={{ left: "24%" }}></span></a></li>
                        <li><a href="#skills">Skills <span style={{ left: "30%" }}></span></a></li>
                        <li><a href="#service">Services <span style={{ left: "28%" }}></span></a></li>
                        <li><a href="#contact">Contact Me <span style={{ left: "20%" }}></span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NavBar;