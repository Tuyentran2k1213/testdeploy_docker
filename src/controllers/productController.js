const initModel = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModel(sequelize);
const { Op } = require("sequelize");
const reponse = require('../config/reponse');


const getProduct = async (req, res) => {
    const getProduct = await model.products.findAll();
    // res.status(200).send(getProduct);
    reponse.successCode("Thành công", getProduct, res);

}

const createProduct = async (req, res) => {

    try {

        const productModel = {
            product_name,
            price
        } = req.body;

        const result = await model.products.create(productModel)
        // res.status(200).send(result);
        reponse.successCode("Thành công", result, res);
    } catch (err) {
        // res.status(500).send("Error");
        reponse.failCode("Thất bại", res);

    }
}

const getProductByName = async (req, res) => {

    const { id } = req.params;

    const getProduct = await model.products.findAll({
        where: {
            product_name: {
                [Op.like]: `%${id}%`
            }

        }
    });
    // res.status(200).send(getProduct);
    reponse.successCode("Thành công", getProduct, res);


}

module.exports = {
    getProduct,
    createProduct,
    getProductByName
}