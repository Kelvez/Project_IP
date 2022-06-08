const Notifs = require("../models/notif");

const createNewFollower = async (user, otherUser) => {
    try {
        const alreadyFollowed = await findNewFollower(user, otherUser);
        if (alreadyFollowed?.data) {
            await deleteById(alreadyFollowed.data._id);
        }
        const newNotif = {
            user, 
            otherUser, 
            type: 'newFollower'
        }

        const createdNotif = await Notifs.create(newNotif);

        return {
            success: true,
            data: createdNotif
        }  
    } catch (err) {
        return {
            success: false,
            error: err
        }
    }
}

const createNewArt = async (user, otherUser, newArt) => {
    try {
        const newNotif = {
            user, 
            otherUser, 
            newArt, 
            type: 'newArt'
        }

        const createdNotif = await Notifs.create(newNotif);

        return {
            success: true,
            data: createdNotif
        }  
    } catch (err) {
        return {
            success: false,
            error: err
        }
    }
}

const findNewFollower = async (user, otherUser) => {
    try {
        console.log('findNewFollower')
        const follow = await Notifs.find({"user": user, "otherUser": otherUser, "type": 'newFollower'})
        if (follow) {
            if (follow.length == 0) {
                return {success: true, data: false};
            } else {
                return {success: true, data: follow};
            }
        } else {
            return {success: false, error: "This user has no follow"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

const deleteById = async (id) => {
    try {
        const retDelete = await Notifs.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "Notif's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

module.exports = {
    createNewFollower,
    createNewArt,
    findNewFollower,
    deleteById
}