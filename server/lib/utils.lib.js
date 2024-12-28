import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  res.cookie("jwt", token, {
    maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    httpOnly: true, // Prevention of XSS attacks
    sameSite: "strict", // CSRF attacks
    secure: process.env.NODE_ENV !== "development", // CSRF attacks
  });

  return token;
};
