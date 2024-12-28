const SignUp = (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    res.json("sign up");
  } catch (error) {}
};

const LogIn = (req, res) => {
  res.json("log in");
};

const LogOut = (req, res) => {
  res.json("log out");
};

export { SignUp, LogIn, LogOut };
