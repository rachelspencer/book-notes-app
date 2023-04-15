module.exports = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body
            console.log("Backend register", req.body)
            res.status(200).send(req.body)
        } catch (error) {
        console.log(error)
        };   
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body
            console.log("Backend login", req.body)
            res.status(200).send(req.body)
        } catch (error) {
        console.log(error)
        }; 
    },
};