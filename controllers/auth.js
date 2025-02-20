const authHelpers = require("../helpers/users");

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, admin } = req.body;

    // @SaraMajeed this helper function doesn't exist
    await authHelpers.registerUser({ username, email, password, admin });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // @SaraMajeed this helper function doesn't exist
    const response = await authHelpers.loginUser({ email, password });

    res.status(200).json({ message: `Logged in as ${response.username}` });
  } catch (err) {
    next(err);
  }
};

const logoutUser = async (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json({ message: "Logged Out Successfully" });
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
