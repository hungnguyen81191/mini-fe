import axios from "axios";

const url = `${process.env.VUE_APP_BASE_URL}`;

export async function login(username: string, password: string) {
    
        // debugger;
        await axios.post(url + 'auth/login', {"username": username,"password": password })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        })
}   