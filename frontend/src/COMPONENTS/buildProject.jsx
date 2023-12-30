import { useState, useEffect } from "react";
import "../CSS/buildProject.css";
import axios from "axios";

const BuildProject = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [requirement, setRequirement] = useState("");

    const submit = () => {
        if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".buildProject__wrapper input")[0].value)) {
            document.querySelectorAll(".buildProject__wrapper input")[0].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid First Name."
        } else if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".buildProject__wrapper input")[1].value)) {
            document.querySelectorAll(".buildProject__wrapper input")[1].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Last Name."
        } else if (!new RegExp("^[\\w]+([\.-]?[\\w]+)*@[\\w]+([\.-]?[\\w]+)*(\.[\\w]{2,3})+$").test(document.querySelectorAll(".buildProject__wrapper input")[2].value)) {
            document.querySelectorAll(".buildProject__wrapper input")[2].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Email Address."
        } else if (!new RegExp("^[\+0-9][0-9]{4,11}$").test(document.querySelectorAll(".buildProject__wrapper input")[3].value)) {
            document.querySelectorAll(".buildProject__wrapper input")[3].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Mobile Number."
        } else if (document.querySelectorAll(".buildProject__wrapper input")[4].value == "") {
            document.querySelectorAll(".buildProject__wrapper input")[4].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Project Title."
        } else if (document.querySelectorAll(".buildProject__wrapper textarea")[0].value == "") {
            document.querySelectorAll(".buildProject__wrapper textarea")[0].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Project Description."
        } else if (document.querySelectorAll(".buildProject__wrapper textarea")[1].value == "") {
            document.querySelectorAll(".buildProject__wrapper textarea")[1].focus();
            document.querySelector(".buildProject__wrapper .errorMsg").style.display = "block";
            document.querySelector(".buildProject__wrapper .errorMsg").innerText = "Invalid Project Requirement."
        }
        else {
            axios.post("/buildProject", { fname, lname, email, phone, projectTitle, projectDesc, requirement })
                .then((res) => {
                    if (res.data === true) {
                        document.querySelectorAll(".buildProject__wrapper input").forEach((input) => input.value = "");
                        document.querySelector(".buildProject__wrapper textarea").value = ""
                        window.alert("Submission Successful")
                    } else {
                        window.alert("Something went wrong");
                    }
                })
                .catch((err) => console.error(`Message Sending Error =>>> ${err}`))
        }
    }

    useEffect(() => {
        const inputs = document.querySelectorAll("#buildProject__box div input");
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
            <section className="buildProject__wrapper">
                <header><span>BUILD</span><span>PROJECT</span></header>
                <div className="errorMsg" style={{ width: "97%", height: "30px", backgroundColor: "#c61111", color: "white", paddingLeft: "3%", paddingTop: ".5%", display: "none" }}></div>
                <div id="buildProject__box">
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
                        <input type="text" onChange={(e) => setProjectTitle(e.target.value)} placeholder="Enter the project title e.g. E-Commerece Website" />
                        <textarea cols="30" rows="10" onChange={(e) => setProjectDesc(e.target.value)} style={{ marginBottom: "10px" }} placeholder="Enter the project description"></textarea>
                        <textarea cols="30" rows="10" onChange={(e) => setRequirement(e.target.value)} placeholder="Enter the project requirements"></textarea>
                    </div>
                    <button onClick={() => submit()}>SUBMIT</button>
                </div>
            </section>
        </>
    )
}

export default BuildProject;