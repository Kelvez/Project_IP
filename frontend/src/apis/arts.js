import axios from "axios";

var arts = {
    async getAll() {
        const result = await axios.get('http://localhost:3001/arts/all', {withCredentials: true, headers: {"Content-type": "application/json",} });
        return result;
    },
    async getMyArts() {
        const result = await axios.get('http://localhost:3001/arts/my-arts', {withCredentials: true, headers: {"Content-type": "application/json",} });
        return result;
    },
    arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    },
    async create(image, name, desc) {
        let formData = new FormData();
        formData.append("upload", image);
        formData.append("name", name);
        formData.append("desc", desc);
        const result = await axios.post('http://localhost:3001/arts/create', formData, {withCredentials: true, headers: {"Content-type": "multipart/form-data",} });
        return result;
    }
}

export default arts
