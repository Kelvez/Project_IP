const Arts = require("../models/art");

const findById = async (id) => {
    try {
        const art = await Arts.findById(id);
        if (art) {
            return {success: true, data: art};
        } else {
            return {success: false, error: "Art's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const findAll = async () => {
    try {
        const arts = await Arts.find();
        if (arts) {
            return {success: true, data: arts};
        } else {
            return {success: false, error: "No arts found"};
        }
    } catch (err) {
        return {success: false, error: err};
    } 
}

const artsOfUser = async (idUser) => {
    try {
        const arts = await Arts.find({user: idUser});
        if (arts) {
            return {success: true, data: arts};
        } else {
            return {success: false, error: "No arts found"};
        }
    } catch (err) {
        return {success: false, error: err};
    } 
}

const plusView = async (id) => {
    try {
        const art = await Arts.findById(id);
        console.log(id)
        const updateArt = await Arts.updateOne({"_id": id}, {$set: {"views": art.views+1}});
        if (updateArt) {
            return {success: true, data: updateArt};
        } else {
            return {success: false, error: "Failed to update"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const create = async (image, name, user, desc) => {
    try {
        const newArt = {
            image, 
            name, 
            user,
            desc
        }

        const createdArt = await Arts.create(newArt);

        return {
            success: true,
            data: createdArt._id
        }  //We do not return the data because it contains an image and it's a lt of data to send
    } catch (err) {
        return {
            success: false,
            error: err
        }
    }
}

const update = async (id, name, desc) => {
    try {
        const updateArt = await Arts.updateOne({"_id": id}, {$set: {"name": name, "user": user, "desc": desc}});
        if (updateArt) {
            return {success: true, data: updateArt};
        } else {
            return {success: false, error: "Failed to update"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const remove = async (id) => {
    try {
        const retDelete = await Arts.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "Art's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

module.exports = {
    findById,
    findAll,
    artsOfUser,
    plusView,
    create,
    update,
    remove
}