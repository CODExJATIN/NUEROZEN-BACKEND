const jwt = require("jsonwebtoken");

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  return token;


  
};

module.exports = createTokenAndSaveCookie;