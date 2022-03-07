module.exports = [{
        path: "/tutorials/",
        method: "get",
        //middlewares: ["auth"],
        handler: "find"
    },
    {
        path: "/tutorials/:id",
        method: "get",
        //middlewares: ["auth"],
        handler: "findOne"
    },
    {
        path: "/tutorials/:id",
        method: "put",
        //middlewares: ["auth"],
        handler: "updateOne"
    },
    {
        path: "/tutorials/mass_delete",
        method: "delete",
        //middlewares: ["auth"],
        handler: "deleteAll"
    },
    {
        path: "/tutorials/:id",
        method: "delete",
        //middlewares: ["auth"],
        handler: "deleteOne"
    },
    {
        path: "/tutorials/",
        method: "post",
        middlewares: ["auth"],
        handler: "create"
    },

]