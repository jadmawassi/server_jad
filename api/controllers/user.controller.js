const USER_MODEL = require("../modules/user.model");



const createUser = async (req, res) => {
    console.log(req.body);

    const {
        name,
        lastName,
        password,
        dataBirth,
        phoneNumber,
        age,
        gmail,

    } = req.body
    try {
        const user = await USER_MODEL.create({
            name,
            lastName,
            password,
            dataBirth,
            phoneNumber,
            age,
            gmail,
        })
        res.status(200).json({
            success: true,
            message: "welcome" + name,
        });


    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { gmail, password } = req.body;
        const user = await USER_MODEL.findOne({ gmail });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "user not found"
            });
        }
        if (user.password === password) {
            res.status(200).json({
                user,
                success: true,
                message: "welcome" + user.name

            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "password error"

            });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { _id, userUpdate } = req.body;
        const NewUser = await USER_MODEL.findOneAndUpdate(
            { _id },
            userUpdate,
            { new: true, runValidators: true, lean: true }
        )
        res.status(200).json({
            NewUser,
            success: !!NewUser,
            message: "user Updated😁😁"

        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            errormessage: error.message,
            message: 'Update Field😒😒'

        });

    }
}

module.exports = {
    createUser,
    login,
    updateUser,
};

