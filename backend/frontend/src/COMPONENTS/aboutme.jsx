import "../CSS/aboutme.css";
import person from "../ICONS/person.png";
import email from "../ICONS/email.png";
import mobile from "../ICONS/mobile.png";
import nationality from "../ICONS/nationality.png";
import dob from "../ICONS/dob.png";
import img from "../ICONS/photo.png"
import pdf from "../myResume.pdf";

const AboutMe = () => {
    return (
        <>
            <section className="about__wrapper" id="about">
                <div className="left">
                    <img src={img}/>
                </div>
                <div id="right">
                    <header><span>ABOUT</span><span>ME</span></header>
                    <p>Fullstack Developer</p>
                    <div className="content">
                        <p>Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of
                            backend and frontend development requirements. Handles any part of process with ease.</p>
                    </div>
                    <div className="pdetails">
                        <h3>Personal Details</h3>
                        <div><span><img src={person} /></span><span>Siva Sankar Sahoo</span></div>
                        <div><span><img src={email}/></span><span>sahoosivasankar33@gmail.com</span></div>
                        <div><span><img src={mobile} /></span><span>+91 7609097828</span></div>
                        <div><span><img src={nationality}/></span><span>Indian</span></div>
                        <div><span><img src={dob} /></span>January 21, 2004</div>
                    </div>
                    <div className="anchor"><a href={pdf} download>Download CV</a></div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;