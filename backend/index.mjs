import express from "express";
import cors from "cors";
import { messageCol, hireCol, projectCol } from "./database.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const web = express();
const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

web.use(express.json());
web.use(express.urlencoded({ extended: false }));
web.use(cors());

web.post("/submitMsg", async (req, res) => {
    try {
        const { fname, lname, email, msg } = req.body;

        const message = new messageCol({
            firstName: fname,
            lastName: lname,
            email: email,
            msg: msg
        })
        const data = await message.save();

        data != null ? res.status(200).send(true) : res.status(200).send(false);
    } catch (error) {
        console.error(`Message submission error =>>> ${error}`)
    }
})

web.post("/buildProject", async (req, res) => {
    try {
        const { fname, lname, email, phone, projectTitle, projectDesc, requirement } = req.body;
        const message = new projectCol({
            fname: fname,
            lname: lname,
            email: email,
            mobile: phone,
            projectTitle: projectTitle,
            projectDesc: projectDesc,
            projectRequirement: requirement,
        })
        const data = await message.save();

        data != null ? res.status(200).send(true) : res.status(200).send(false);
    } catch (error) {
        console.error(`New Project Submission Error =>>> ${error}`)
    }
})

web.post("/hiringMsg", async (req, res) => {
    try {
        const { fname, lname, email, phone, designation, aboutJob } = req.body;
        const message = new hireCol({
            fname: fname,
            lname: lname,
            email: email,
            mobile: phone,
            jobTitle: designation,
            jobDesc: aboutJob,
        })
        const data = await message.save();

        data != null ? res.status(200).send(true) : res.status(200).send(false);
    } catch (error) {
        console.error(`Hiring Message Submission Error =>>> ${error}`)
    }
})

web.use(express.static(path.join(__dirname, "./frontend/dist")))
web.get("*", (req,res)=>{
    try {
        res.sendFile(path.join(__dirname, "./frontend/dist/index.html"))
    } catch (error) {
        console.log(`error in getting the frontend file ==> ${error}`)
    }
})

web.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));