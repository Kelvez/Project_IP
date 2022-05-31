import axios from "axios";

var user = {
    async updateUser(dataUpdate) {
        const result = await axios.put('http://localhost:3001/user/update', dataUpdate, {withCredentials: true, headers: {"Content-type": "application/json",} });
        return result;
    }
}

export default user
