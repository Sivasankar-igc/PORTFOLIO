import "../CSS/hireMe.css";
import { useState, useEffect } from "react";
import axios from "axios";

const HireMe = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const [aboutJob, setAboutJob] = useState("");

    const submit = () => {
        if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".hireMe__wrapper input")[0].value)) {
            document.querySelectorAll(".hireMe__wrapper input")[0].focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid First Name."
        } else if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".hireMe__wrapper input")[1].value)) {
            document.querySelectorAll(".hireMe__wrapper input")[1].focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid Last Name."
        } else if (!new RegExp("^[\\w]+([\.-]?[\\w]+)*@[\\w]+([\.-]?[\\w]+)*(\.[\\w]{2,3})+$").test(document.querySelectorAll(".hireMe__wrapper input")[2].value)) {
            document.querySelectorAll(".hireMe__wrapper input")[2].focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid Email Address."
        } else if (!new RegExp("^[\+0-9][0-9]{4,11}$").test(document.querySelectorAll(".hireMe__wrapper input")[3].value)) {
            document.querySelectorAll(".hireMe__wrapper input")[3].focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid Mobile Number."
        } else if (document.querySelectorAll(".hireMe__wrapper input")[4].value == "") {
            document.querySelectorAll(".hireMe__wrapper input")[4].focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid Job Title."
        } else if (document.querySelector(".hireMe__wrapper textarea").value == "") {
            document.querySelectorAll(".hireMe__wrapper textarea").focus();
            document.querySelector(".hireMe__wrapper .errorMsg").style.display = "block";
            document.querySelector(".hireMe__wrapper .errorMsg").innerText = "Invalid Job Description."
        } else {
            axios.post("/hiringMsg", { fname, lname, email, phone, designation, aboutJob })
                .then((res) => {
                    if (res.data === true) {
                        document.querySelectorAll(".hireMe__wrapper input").forEach((input) => input.value = "");
                        document.querySelector(".hireMe__wrapper textarea").value = ""
                        window.alert("Submission Successful")
                    } else {
                        window.alert("Something went wrong");
                    }
                })
                .catch((err) => console.error(`Message Sending Error =>>> ${err}`))
        }

    }

    useEffect(() => {
        const inputs = document.querySelectorAll("#hireMe__box div input");
        const events = ["mouseenter", "click"]

        inputs.forEach((input) => {

            const spansOfLabelArray = new Array(input.nextSibling.children);

            spansOfLabelArray.forEach(spansofLabel => {

                let len = spansofLabel.length;

                for (let i = 0; i < len; i++) {
                    spansofLabel[i].style.left = `${i * 10}px`
                }
            })

            events.forEach(evt => {

                input.addEventListener(evt, () => {

                    spansOfLabelArray.forEach(spansofLabel => {
                        let i = 0, len = spansofLabel.length;
                        let time = setInterval(() => {
                            i < len ? spansofLabel[i++].classList.add("wavySpan") : clearInterval(time)
                        }, 100)
                    })
                })

            })
            input.addEventListener("mouseleave", () => {

                spansOfLabelArray.forEach(spansofLabel => {
                    let i = 0, len = spansofLabel.length;
                    let time = setInterval(() => {
                        i < len ? spansofLabel[i++].classList.remove("wavySpan") : clearInterval(time)
                    }, 100)
                })
            })
        })
    })
    return (
        <>
            <section className="hireMe__wrapper">
                <header><span>HIRE</span><span>ME</span></header>
                <div className="errorMsg" style={{ width: "97%", height: "30px", backgroundColor: "#c61111", color: "white", paddingLeft: "3%", paddingTop: ".5%", display: "none" }}></div>
                <div id="hireMe__box">
                    <div>
                        <input type="text" style={{ marginRight: "10px" }} id="fname" required onChange={(e) => setFname(e.target.value)} />
                        <label htmlFor="fname">
                            <span>F</span>
                            <span>i</span>
                            <span>r</span>
                            <span>s</span>
                            <span>t</span>
                            <span> </span>
                            <span>N</span>
                            <span>a</span>
                            <span>m</span>
                            <span>e</span>
                        </label>
                        <input type="text" id="lname" required onChange={(e) => setLname(e.target.value)} />
                        <label htmlFor="lname">
                            <span>L</span>
                            <span>a</span>
                            <span>s</span>
                            <span>t</span>
                            <span> </span>
                            <span>N</span>
                            <span>a</span>
                            <span>m</span>
                            <span>e</span>
                        </label>
                    </div>
                    <div>
                        <input type="email" id="email" required style={{ marginRight: "10px" }} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">
                            <span>E</span>
                            <span>m</span>
                            <span>a</span>
                            <span>i</span>
                            <span>l</span>
                        </label>
                        <input type="number" id="phno" required onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="phno">
                            <span>M</span><span>o</span><span>b</span><span>i</span><span>l</span><span>e</span>
                        </label>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setDesignation(e.target.value)} placeholder="Enter the Job Title e.g. Full Stack Developer" />
                        <textarea cols="30" rows="10" onChange={(e) => setAboutJob(e.target.value)} placeholder="Enter the job description e.g. You will be working as a full stack developer to develope truly user friendly websites."></textarea>
                    </div>
                    <button onClick={() => submit()}>SUBMIT</button>
                </div>
            </section>
        </>
    )
}

export default HireMe;