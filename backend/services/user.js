const Users = require("../models/user");
const bcrypt = require('bcryptjs');

const findById = async (id) => {
    try {
        const user = await Users.findById(id);
        if (user) {
            return {success: true, data: user};
        } else {
            return {success: false, error: "User's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const deleteById = async (id) => {
    try {
        const retDelete = await Users.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "User's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const updatePassword = async (id, newPassword) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hashedPass = bcrypt.hashSync(newPassword, salt);
        const updatePass = await Users.updateOne({"_id": id}, {"password": hashedPass});
        if (updatePass) {
            return {success: true, data: updatePass};
        } else {
            return {success: false, error: "Failed to change password"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const updateUsername = async (id, username) => {
    try {
        const updateUsername = await Users.updateOne({"_id": id}, {"username": username});
        if (updateUsername) {
            return {success: true, data: updateUsername};
        } else {
            return {success: false, error: "Failed to change username"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const getUsers = async () => {
    try {
        const users = await Users.find();
        if (users) {
            return {success: true, data: users};
        } else {
            return {success: false, error: "No users found"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

module.exports = {
    findById,
    getUsers,
    deleteById,
    updatePassword,
    updateUsername
}
