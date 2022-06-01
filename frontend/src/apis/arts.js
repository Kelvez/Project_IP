import axios from "axios";

var arts = {
    async getAll() {
        const result = await axios.get('http://localhost:3001/arts/all', {withCredentials: true, headers: {"Content-type": "application/json",} });
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
    }
}

export default arts
