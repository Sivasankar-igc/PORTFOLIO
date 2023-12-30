import "../CSS/contact.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const submit = () => {
        if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".contact__wrapper input")[0].value)) {
            document.querySelectorAll(".contact__wrapper input")[0].focus();
            document.querySelector(".contact__wrapper .errorMsg").style.display = "block";
            document.querySelector(".contact__wrapper .errorMsg").innerText = "Invalid First Name."
        } else if (!new RegExp("^[a-zA-Z][a-zA-Z.\\s]+[a-zA-Z]+$").test(document.querySelectorAll(".contact__wrapper input")[1].value)) {
            document.querySelectorAll(".contact__wrapper input")[1].focus();
            document.querySelector(".contact__wrapper .errorMsg").style.display = "block";
            document.querySelector(".contact__wrapper .errorMsg").innerText = "Invalid Last Name."
        } else if (!new RegExp("^[\\w]+([\.-]?[\\w]+)*@[\\w]+([\.-]?[\\w]+)*(\.[\\w]{2,3})+$").test(document.querySelectorAll(".contact__wrapper input")[2].value)) {
            document.querySelectorAll(".contact__wrapper input")[2].focus();
            document.querySelector(".contact__wrapper .errorMsg").style.display = "block";
            document.querySelector(".contact__wrapper .errorMsg").innerText = "Invalid Email Address."
        } else if (document.querySelector(".contact__wrapper textarea").value == "") {
            document.querySelector(".contact__wrapper textarea").focus();
            document.querySelector(".contact__wrapper .errorMsg").style.display = "block";
            document.querySelector(".contact__wrapper .errorMsg").innerText = "Message can't be empty."
        } else {
            axios.post("/submitMsg", { fname, lname, email, msg })
                .then((res) => {
                    if (res.data === true) {
                        document.querySelectorAll(".contact__wrapper input").forEach((input) => input.value = "");
                        document.querySelector(".contact__wrapper textarea").value = "";
                        document.querySelector(".contact__wrapper .errorMsg").style.display = "none";
                        window.alert("Submission Successful")
                    } else {
                        window.alert("Something went wrong");
                    }
                })
                .catch((err) => console.error(`Message Sending Error =>>> ${err}`))
        }

    }

    useEffect(() => {
        const inputs = document.querySelectorAll("#contact__box div input");
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
            <section className="contact__wrapper" id="contact">
                <header><span>CONTACT</span><span>ME</span></header>
                <div className="errorMsg" style={{ width: "97%", height: "30px", backgroundColor: "#c61111", color: "white", paddingLeft: "3%", paddingTop: ".5%", display: "none" }}></div>
                <div id="contact__box">
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
                        <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">
                            <span>E</span>
                            <span>m</span>
                            <span>a</span>
                            <span>i</span>
                            <span>l</span>
                        </label>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message e.g. I want to develope a website" onChange={(e) => setMsg(e.target.value)}></textarea>
                    </div>
                    <button onClick={() => submit()}>SUBMIT</button>
                </div>
            </section>
        </>
    )
}

export default Contact;