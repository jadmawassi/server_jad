const PRODECUT_MODEL = require("../modules/product.model");

const createProduct = async (req, res) => {
    console.log(req.body);

    const {
        Name,
        Price,
        image,
        catgory,
        Color,
        max_Speed,
        hp,
        Km_0_100,

    } = req.body
    try {
        const prodact = await PRODECUT_MODEL.create({
            Name,
            Price,
            image,
            catgory,
            Color,
            max_Speed,
            hp,
            Km_0_100,
        })
        res.status(200).json({
            success: true,
            message: "product created",
            prodact
        });


    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const findAllProdecut = async (req, res) => {
    try {
        const prodact = await PRODECUT_MODEL.find(req?.body || {})
        res.status(200).json({
            success: true,
            message: "product created",
            prodact
        });


    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}





module.exports = {
    createProduct,
    findAllProdecut,

}


