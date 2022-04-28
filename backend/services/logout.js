const logout = (session) => {
    try {
        session.jwt = null;
        session.destroy();

        return {success: true};
    } catch (err) {
        return {success: false, error: err|| 'err'};
    }
}

module.exports = {
    logout
}