module.exports = [{
        path: "/users",
        method: "get",
        handler: "find"
    },
    {
        path: "/users/auth",
        method: "get",
        middlewares: ["verifyToken"],
        handler: "auth"
    },
]