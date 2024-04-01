import { useEffect } from "react";
import "../CSS/latestProject.css";
import content from "../ICONS/content.jpg";
import anime from "../ICONS/anime.jpg";
import employee from "../ICONS/employee.jpg";
import exam from "../ICONS/exam.jpg";
import house from "../ICONS/house.jpg";
import typing from "../ICONS/typing.jpg";
import bingo from "../ICONS/bingo.jpg";
import weather from "../ICONS/weather.jpg";
import tictactoe from "../ICONS/tictactoe.jpg";

const LatestProject = () => {

    const slideTheContent = (contentIndex) => {
        const content = document.querySelectorAll(".lp__box .content");
        content[contentIndex].classList.toggle("activeContent");
    }
    return (
        <>
            <section className="latestProject__wrapper">
                <header><span>LATEST</span><span>PROJECTS</span></header>
                <div className="lp__box">
                    <div className="card">
                        <header>Online Typing Practice</header>
                        <img src={typing} id="image-cont" />
                        <p onClick={() => slideTheContent(0)}>Know More</p>
                        <div className="content">
                            A website that helps the users to practice and improve the qwerty keyboard typing in a very fun way. The users can choose a paragraph to practice and can also save their progress. It also has a Rank Board that shows top 50 typers.
                            <a href="https://thetyper.cyclic.cloud/" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Employee Management System</header>
                        <img src={employee} id="image-cont" />
                        <p onClick={() => slideTheContent(1)}>Know More</p>
                        <div className="content">
                            This website lists all the employees with their name, gender, post, availability and other details. The Team Leaders can select employees, create, manage and modify their team. It shows real-time data. <a href="https://github.com/Sivasankar-igc/HELIVERSE" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Content Management System</header>
                        <img src={content} id="image-cont" />
                        <p onClick={() => slideTheContent(2)}>Know More</p>
                        <div className="content">
                            Users can publish their blogs and can view and react to other blogs. The Admin can manage all of the published blogs. A user can also allow another user to manage his/her blogs.<a href="https://github.com/Sivasankar-igc/CMS" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Anime Todo List</header>
                        <img src={anime} id="image-cont" />
                        <p onClick={() => slideTheContent(3)}>Know More</p>
                        <div className="content">
                            It lists all of the animes that the user has added. It categorizes the animes in different categories like watched, pending, running, etc. The users can manage their list as per their requirement.<a href="https://github.com/Sivasankar-igc/AnimeTodo" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Online House Search</header>
                        <img src={house} id="image-cont" />
                        <p onClick={() => slideTheContent(4)}>Know More</p>
                        <div className="content">
                            A website that helps the users to find their dream house as per their requirements. It features the houses according to the locality, price and BHK. The users also get a free room tour and can have direct conversation with the dealer.<a href="https://github.com/Sivasankar-igc/SEARCHYOURHOUSE" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Exam Creation Portal</header>
                        <img src={exam} id="image-cont" />
                        <p onClick={() => slideTheContent(5)}>Know More</p>
                        <div className="content">
                            Students can login to this portal and give the scheduled exam. The teachers prepare question paper. Admin schedules the exam date and time. The result is displayed immediately once the student finishes the exam.<a href="https://github.com/Sivasankar-igc/OnlineExamPortal" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Bingo Game</header>
                        <img src={bingo} id="image-cont" />
                        <p onClick={() => slideTheContent(6)}>Know More</p>
                        <div className="content">
                            An online multiplayer Bingo game. Play Now with your friends. <a href="https://onlinebingo.onrender.com/" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Tic-Tac-Toe</header>
                        <img src={tictactoe} id="image-cont" />
                        <p onClick={() => slideTheContent(7)}>Know More</p>
                        <div className="content">
                            A really cool game to play with friends. Challenge your friend for a mind-game. And don't forget that there is AI to challenge you. <a href="https://tic-tac-toe-re34.onrender.com/" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                    <div className="card">
                        <header>Weather App</header>
                        <img src={weather} id="image-cont" />
                        <p onClick={() => slideTheContent(8)}>Know More</p>
                        <div className="content">
                            An eye-catching web app with supercool UI to provide weather information according to the user preference. <a href="https://weather-app-kh7o.onrender.com" target="_blank" style={{ color: "#0fc6ff" }}>VISIT</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestProject;