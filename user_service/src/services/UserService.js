const User = require('../models/User')

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
}

const updateUser = async (id, userData) => {
    return await User.findAndUpdate(id, userData, { new: true, runValidators: true })
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}