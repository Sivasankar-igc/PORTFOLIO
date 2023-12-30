import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/services.css";
import frontend from "../ICONS/frontend.png"
import backend from "../ICONS/backend.png"
import fullstack from "../ICONS/fullstack.png";

const Services = () => {
    const nav = useNavigate();
    return (
        <>
            <section className="service__wrapper" id="service">
                <header><span>MY</span><span>SERVICES</span></header>
                <div className="service__box">
                    <div className="card" style={{height:"345px"}}>
                        <img src={frontend}  />
                        <h3>Front End Development</h3>
                        <h5>2 years of experience</h5>
                        <div><p>An Experienced Frontend Developer with a good knowledge of developing stunning websites using HTML, CSS, JavaScript, ReactJS, BootStrap.</p></div>

                        <button onClick={() => nav("/latestProject")} style={{marginTop:"25px"}}>Latest Projects</button>
                        <button onClick={()=>nav("/buildProject")}>Build Now</button>
                    </div>
                    <div className="card">
                        <img src={backend} />
                        <h3>Back End Development</h3>
                        <h5>1.5 years of experience</h5>
                        <div><p>A Dedicated Backend Developer with a good control of handling server-side problems and APIs using NodeJS, ExpressJS, MongoDB and other backend frameworks.</p></div>

                        <button onClick={() => nav("/latestProject")}>Latest Projects</button>
                        <button onClick={()=>nav("/buildProject")}>Build Now</button>
                    </div>
                    <div className="card">
                        <img src={fullstack} />
                        <h3>Full Stack Development</h3>
                        <h5>1.5 years of experience</h5>
                        <div><p>A Curious Full Stack Developer with a passion of developing user-friendly and eye catching websites to meet user satisfaction using various frontend and backend technologies.</p></div>

                        <button onClick={() => nav("/latestProject")}>Latest Projects</button>
                        <button onClick={()=>nav("/buildProject")}>Build Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;