const User = require("../models/user-model");
const Bookacall = require("../models/bookaCall-model");
const Newsletter = require("../models/newsletter-model");
const nodemailer = require("nodemailer");

// Start Home 
const home = async (req, res) => {
    try{
        res.status(200)
        .send('Welcome to site by Router');
    } catch(error){
        console.log(error);
        res.status(400).send({msg:"Page Not Found"});
    }
}

// Start availability 
const availability = async (req, res) => {
    try {
        // Fetch all appointments
        const appointments = await User.find({});
        console.log(`appointments , ${appointments}`)
        const availability = {};

        // Organize data by date
        appointments.forEach(appointment => {
            const date = appointment.date;
            const time = appointment.time;
            if (!availability[date]) {
                availability[date] = [];
            }
            availability[date].push(time);
        });

        res.status(200).json(availability);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Error fetching availability data"});
    }
}

// Start appointment
const appointment = async (req, res) => {
    try{
        const {username, email, title, message, date, time} = req.body

        /*const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({ msg: "email already exists" });
        }*/

        const userCreated = await User.create({username, email, title, message, date, time});
        
        res.status(200).json({msg: userCreated});
    } catch(error){
        console.log(error);
        res.status(400).send({msg:"Page Not Found"});
    }
}

// book a call Start
const bookacall = async (req, res) => {
    try{
        console.log(req.body);
        const { values } = req.body;
        const { name, contactNO, email } = values;

        // Make sure all required fields are provided
        if (!name || !contactNO || !email) {
            return res.status(400).send({ msg: "All fields are required" });
        }


        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        // Email options for the recipient
        const recipientMailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Sending Email",
            html: `<h2>Congratulations! You have successfully sent an email.</h2>`
        };

        // Email options for yourself
        const senderMailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Notification: Email Sent",
            html: `<h2>You have successfully sent an email to ${name} (${email}).</h2>`
        };

        // Send the email to the recipient
        await transporter.sendMail(recipientMailOptions);

        // Send the email to yourself
        await transporter.sendMail(senderMailOptions);


        // Create the booking record
        const bookacallCreated = await Bookacall.create({name, contactNO, email});    
         // Send a success response    
        res.status(200).json({msg: bookacallCreated});
    } catch(error){
        console.log(error);
        // res.status(400).send({msg:"Page Not Found"});
        res.status(400).json({status: 401, error})
    }
}

// newsletter Start
const newsletter = async (req, res) => {
    try{
        console.log(req.body);
        const { email } = req.body;

        // Make sure Email required fields are provided
        if (!email) {
            return res.status(400).send({ msg: "Email fields are required" });
        }

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        // Email options for the recipient
        const recipientMailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Newsletter Sending Email",
            html: `<h2>Congratulations! You have successfully sent an Newsletter email.</h2>`
        };

        // Email options for yourself
        const senderMailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Notification: Newsletter Email Sent",
            html: `<h2>You have successfully Newsletter sent an email to (${email}).</h2>`
        };

        // Send the email to the recipient
        await transporter.sendMail(recipientMailOptions);

        // Send the email to yourself
        await transporter.sendMail(senderMailOptions);

        // Create the booking record
        const newsletterCreated = await Newsletter.create({email});    
         // Send a success response    
        res.status(200).json({msg: newsletterCreated});
    } catch(error){
        console.log(error);
        // res.status(400).send({msg:"Page Not Found"});
        res.status(400).json({status: 401, error})
    }
}

module.exports = {home, appointment, availability, bookacall, newsletter}