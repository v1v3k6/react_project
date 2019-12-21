const isLoggedIn=()=>{
    if(sessionStorage.getItem("loginData"))
        return sessionStorage.getItem("loginData")
    else
        return false
}

const performLoginAction = (username, password) => {
    sessionStorage.setItem("loginData", {username: username, password: password})
}

const performLogoutAction = () => {
    sessionStorage.removeItem("loginData")
}

export default isLoggedIn
export {performLoginAction, isLoggedIn, performLogoutAction}