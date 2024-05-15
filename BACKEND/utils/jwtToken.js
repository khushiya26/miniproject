import dotenv from 'dotenv';

export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    var expiryDate = new Date(Date.now() + (60*24*3600000));
console.log(expiryDate);
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };