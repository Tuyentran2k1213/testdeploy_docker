
const initModel = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModel(sequelize);
const reponse = require('../config/reponse');

//object : {}
const getUser = async (req, res) => {

    // const getUser = await User.findAndCountAll();

    //lấy một bảng
    // const getUser = await model.user_type.findAll();

    //lấy 2 bảng quan hệ 1 - n
    // const getUser = await model.user_type.findAll({include:"users"});

    //lấy 3 bảng quan hệ n - n
    // const getUser = await model.orders.findAll({ include: ["product", "user"] });
    const getUser = await model.products.findAll({ include: ["user_id_users"] });


    // res.status(200).send(getUser);
    reponse.successCode("Thành Công", getUser, res);
}

const getUserById = async (req, res) => {

    const { id } = req.params;

    const getUser = await User.findByPk(id);

    // res.status(200).send(getUser);
    reponse.successCode("Thành Công", getUser, res);
}


//create
const createUser = async (req, res) => {
    try {
        const { userName, userPassword, firstName, lastName, dienThoai, typeId } = req.body;

        const userModel = {
            user_name: userName,
            user_password: userPassword,
            first_name: firstName,
            last_name: lastName,
            sdt: dienThoai,
            type_id: typeId
        }

        const result = await model.users.create(userModel);

        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("Error");
    }

}


//update
const updateUser = async (req, res) => {
    try {

        const { id } = req.params;
        const { userName, userPassword, firstName, lastName, dienThoai, typeId } = req.body;

        const checkUser = await User.findByPk(id);

        if (checkUser) {
            const userModel = {
                userName,
                userPassword,
                firstName,
                lastName,
                dienThoai,
                typeId
            }

            //Cách 1
            // const result = await User.update(userModel, {
            //     where: {
            //         userId: id
            //     }
            // })

            //Cách 2
            const result = await checkUser.update(userModel);


            //result: [0] không có update ,[1] có update
            res.status(200).send(result);
        } else {
            res.status(400).send("Người dùng không tồn tại");
        }

    } catch (err) {
        res.status(500).send("Error");

    }

}


const deleteUser = async (req, res) => {

    try {
        const { id } = req.params;

        const checkUser = await User.findByPk(id);

        if (checkUser) {

            //Cách 1
            const result = await User.destroy({
                where: {
                    userId: id
                }
            })

            //Cách 2
            //const result = await checkUser.destroy();

            //
            res.status(200).send(result.toString());
        } else {
            res.status(400).send("Người dùng không tồn tại");
        }
    } catch (err) {
        res.status(500).send("Error");

    }

}

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}