import { useEffect } from "react";
import "../CSS/skills.css";

const Skills = () => {
    useEffect(() => {
        let skill = document.querySelector(".skills__wrapper");
        let number = skill.querySelectorAll("#skills .circle");
        let circles = skill.querySelectorAll("#skills .circle circle");
        let progress = skill.querySelectorAll(".progress__bar .progress");
        let i = 1;
        let isAnimated = false;

        window.addEventListener("scroll", () => {
            let top = window.scrollY;
            let offset = skill.offsetTop-100;
            let height = skill.offsetHeight;

            if (top > offset && top < offset + height && !isAnimated) {
                isAnimated = true;
                circles.forEach(circle=>circle.classList.add("animate"))
                let time = setInterval(() => {

                    if (i <= 86) {
                        i <= 60 ? number[0].querySelector("span").innerText = `${i}%` : ""
                        i <= 80 ? number[1].querySelector("span").innerText = `${i}%` : ""
                        i <= 80 ? number[3].querySelector("span").innerText = `${i}%` : ""
                        i <= 85 ? number[2].querySelector("span").innerText = `${i}%` : ""
                    }
                    if (i <= 96) {
                        i <= 70 ? progress[0].style.width = `${i}%` : "";
                        i <= 85 ? progress[1].style.width = `${i}%` : "";
                        i <= 85 ? progress[2].style.width = `${i}%` : "";
                        i <= 70 ? progress[3].style.width = `${i}%` : "";
                        i <= 85 ? progress[4].style.width = `${i}%` : "";
                        i <= 80 ? progress[5].style.width = `${i}%` : "";
                        i <= 80 ? progress[6].style.width = `${i}%` : "";
                        i <= 95 ? progress[7].style.width = `${i++}%` : "";
                    } else {
                        clearInterval(time)
                    }
                }, 10)
            }
        })
    }, [])
    return (
        <>
            <section className="skills__wrapper" id="skills">
                <header><span>MY</span> <span>SKILLS</span></header>
                <div className="highlights">
                    <div className="box">
                        <div className="circle">
                            <span>0%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="aqua" />
                                        <stop offset="100%" stopColor="aqua" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="type">
                            <p>UI/UX Design</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle">
                            <span>0%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="aqua" />
                                        <stop offset="100%" stopColor="aqua" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="type">
                            <p>Front End Development</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle">
                            <span>0%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="aqua" />
                                        <stop offset="100%" stopColor="aqua" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="type">
                            <p>Back End Development</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle">
                            <span>0%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="aqua" />
                                        <stop offset="100%" stopColor="aqua" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="type">
                            <p>Full Stack Development</p>
                        </div>
                    </div>
                </div>

                <div className="skill__box">
                    <div className="skill">
                        <p>HTML5 & CSS3 (<span>70%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>JavaScript (<span>85%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>React JS (<span>85%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>MongoDB (<span>70%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>Express.js (<span>85%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>Node.js (<span>80%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>Git & GitHub (<span>80%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                    <div className="skill">
                        <p>BootStrap (<span>95%</span>)</p>
                        <div className="progress__bar"><div className="progress"></div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;