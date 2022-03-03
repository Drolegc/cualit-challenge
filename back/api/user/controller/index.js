'use strict';

module.exports = {
    async find(req, res) {
        res.send("SAPE")
    },

    async auth(req, res) {
        res.send("AUTH")
    }
}