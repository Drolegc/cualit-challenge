const jwt = require("jsonwebtoken");

module.exports = {

    async auth(req, res, next) {

        const token = req.headers["authorization"];

        if (!token) {
            return res.status(403).send({ message: "A token is required for authentication" });
        }
        try {
            const decoded = jwt.verify(token, "TOKEN-KEY");
            req.user = decoded;
        } catch (err) {
            return res.status(401).send({ message: "Invalid Token" });
        }
        return next();
    }

};