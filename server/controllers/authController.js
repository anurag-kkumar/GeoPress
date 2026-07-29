const cloudinary = require("../config/cloudinary");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {

    const { firstname, lastname, email, password, gender, city } = req.body;


    // Check existing user
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }


    // Upload image to Cloudinary
    let imageUrl = "";

    if (req.file) {

      const result = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      imageUrl = result.secure_url;
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    // Create user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      gender,
      city,
      profileImage: imageUrl
    });


    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );


    res.status(201).json({
      message: "Signup Successful",
      token,
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup Failed"
    });

  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).json({ message: "Invalid Email or Password" });

    // Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Email or Password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login Successful",
      token,
    });

  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // Fetch l user from MongoDB 
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to load profile" });
  }
};

// for fogot password 
exports.forgotPassword = async (req, res) => {
  try {

    const { email, newPassword } = req.body;


    // find user
    const user = await User.findOne({ email });


    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }


    // hash new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );


    // update password
    user.password = hashedPassword;

    await user.save();


    res.json({
      message: "Password reset successful"
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Password reset failed"
    });

  }
};