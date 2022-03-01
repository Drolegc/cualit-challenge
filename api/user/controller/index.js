'use strict';
const userModel = require('../model/user')
const _ = require('lodash')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async find(req, res) {
        res.send("SAPE")
    },

    async authLogin(req, res) {
        const { username, password } = req.body

        if (_.isEmpty(username))
            return res.status(400).send("Username is required")

        if (_.isEmpty(password))
            return res.status(400).send("Password is required")


        let user = await userModel.find({ username })
        user = _.first(user)


        if (_.isEmpty(user))
            return res.status(404).send("User not found")

        console.log(user)

        if (await bcrypt.compare(password, user.password)) {
            // Create token
            const token = jwt.sign({ user_id: user.id, username },
                "TOKEN-KEY", {
                    expiresIn: "5m",
                }
            );

            res.status(200).json({ jwt: token, user });
        }
        res.status(400).send("Invalid Credentials");

    },

    async authRegister(req, res) {

        const { username, password } = req.body


        if (_.isEmpty(username))
            return res.status(400).send("Username is required")

        if (_.isEmpty(password))
            return res.status(400).send("Password is required")


        const oldUser = await userModel.find({ username })

        if (!_.isEmpty(oldUser))
            return res.status(409).send("Username is allready taken")

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({ username: username.toLowerCase(), password: encryptedPassword });
        const token = jwt.sign({ user_id: newUser.id, username },
            "TOKEN-KEY", {
                expiresIn: "5m",
            }
        );

        delete newUser.password //DOESNT WORK

        return res.status(201).send({ jwt: token, user: newUser })
    }
}