export const isAuthenticated = () => {
    const token = document.cookie;
    if(token){
        return true;
    }else{
        return false;
    }
}