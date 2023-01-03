const checkLoggedIn = (req, res, next) => {
  if (!req.state.user) {
    res.status = 401; //Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
