const express= require("express")
const router = express.Router();
const User = require("../models/User")
const Contact = require("../models/Contact")

router.post("/register", async (req,res)=>{
try {
    let {userName, email, password, birthDate} = req.body
    let newUser = new User({
      userName,
      email,
      password,
      birthDate,
    });
    await newUser.save()
    res.status(200).json({status:true, message:"Your account has been created successfully"})
} catch (error) {
    if (error) throw error;
    res.status(401).json({status: false, error})
}
})

router.post("/addContact/:userId", async (req, res) => {
  try {
    let { fullName, email, phone, birthDate } = req.body;
    let {userId} = req.params
    let newContact = new Contact({
      fullName,
      email,
      phone,
      birthDate,
      userId,
    });
    await newContact.save();
    res
      .status(200)
      .json({
        status: true,
        message: "Your new contact has been created successfully",
      });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
});

router.get('/contactList/:userId', async (req, res)=>{
    try {
        let {userId} = req.params
        let contacts = await Contact.find({userId})
        res.status(200).json({status:true, data: contacts})
    } catch (error) {
        if (error) throw error;
        res.status(401).json({status:false, error})
    }
})

module.exports = router