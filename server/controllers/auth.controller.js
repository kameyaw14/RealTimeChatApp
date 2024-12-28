import { generateToken } from "../lib/utils.lib.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import validator from "validator";

const SignUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    //validate input fields
    let errArray = [];

    if (!fullname) {
      errArray.push("Enter your full name");
    }
    if (!email) {
      errArray.push("Enter your email");
    }
    if (!password) {
      errArray.push("Enter your password");
    }

    if (errArray.length > 0) {
      return res.status(400).json({ message: errArray });
    }
    //validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter a valid email" });
    }
    // validate password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // generate jwt
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        fullname: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const LogIn = (req, res) => {
  res.json("log in");
};

const LogOut = (req, res) => {
  res.json("log out");
};

export { SignUp, LogIn, LogOut };
