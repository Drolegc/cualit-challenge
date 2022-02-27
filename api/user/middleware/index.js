const jwt = require("jsonwebtoken");

module.exports = {

    async verifyToken(req, res, next) {

        const token = req.headers["authorization"];

        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded = jwt.verify(token, "TOKEN-KEY");
            req.user = decoded;
            console.log(decoded)
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }
        return next();
    }

};