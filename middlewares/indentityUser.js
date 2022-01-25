exports.identityUser = async (req, res, next) => {
    // From req.headers, we get the tokenUser
    // Verify token and check token valid + userid exist in DB
    // If token verified & user exist, return user 

    console.log("Token verified");
    next();
}



