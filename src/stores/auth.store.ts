import axios from "axios";
import { defineStore } from "pinia";
import { useCookies } from "vue3-cookies";

const {cookies} = useCookies();
const baseUrl = `${process.env.VUE_APP_BASE_URL}`;

export const useAuthStore = defineStore("auth",{
    state: () => ({
        access_token: null
    }),
    getters: {
        getAuth (state) {
            return state.access_token;            
        }
    },
    actions: {
        async login(username: string, password: string){            
            await axios.post(baseUrl + 'auth/login', {username , password}).then((res) => {
                this.access_token = res.data.access_token;
                cookies.set("cookie", res.data.access_token);
            }).catch();
        },

        async logout() {
            cookies.remove("cookie");
        }
    }
})