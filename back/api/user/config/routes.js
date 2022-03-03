module.exports = [{
        path: "/users",
        method: "get",
        handler: "find"
    },
    // {
    //     path: "/users/auth",
    //     method: "get",
    //     middlewares: ["verifyToken"],
    //     handler: "auth"
    // },
    {
        path: "/auth/login",
        method: "post",
        handler: "authLogin"
    },
    {
        path: "/auth/register",
        method: "post",
        handler: "authRegister"
    }
]