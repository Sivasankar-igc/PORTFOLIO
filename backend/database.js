const mongoose = require("mongoose");
require("dotenv").config();
let url = process.env.MONGODB;

mongoose.connect(url)
    .then(() => console.log("PORTFOLIO database connected"))
    .catch((err) => console.error(`PORTFOLIO Database Connection Error =>>> ${err}`))

const messageSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    msg: { type: String },
    isRecycled: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
})
const hiringMsgSchema = new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    mobile: { type: String },
    jobTitle: { type: String },
    jobDesc: { type: String },
    isRecycled: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
})
const projectSchema = new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    mobile: { type: String },
    projectTitle: { type: String },
    projectDesc: { type: String },
    projectRequirement: { type: String },
    isRecycled: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
})

const messageCol = new mongoose.model("Message", messageSchema);
const hireCol = new mongoose.model("hiringMessage", hiringMsgSchema);
const projectCol = new mongoose.model("projectMessage", projectSchema);

module.exports = { messageCol, hireCol, projectCol };