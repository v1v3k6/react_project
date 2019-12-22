const loginData = () => {
  return sessionStorage.getItem("loginData")
    ? JSON.parse(sessionStorage.getItem("loginData"))
    : false;
};

const isLoggedIn = () => {
  return loginData().hasUserLoggedIn;
};

const performLoginAction = props => {
  console.log(props);
  const { email = "", password = "" } = props;
  const localLoginData = loginData();
  if (localLoginData.email === email && localLoginData.password === password)
    localLoginData.hasUserLoggedIn = true;
  else localLoginData.hasUserLoggedIn = false;
  sessionStorage.setItem("loginData", JSON.stringify(localLoginData));
};

const performLogoutAction = () => {
  const localLoginData = loginData();
  localLoginData.hasUserLoggedIn = false;
  sessionStorage.setItem("loginData", JSON.stringify(localLoginData));
};

const simulateAccountCreation = props => {
  let tmpProp = props;
  tmpProp["hasUserLoggedIn"] = false;
  sessionStorage.setItem("loginData", JSON.stringify(tmpProp));
};

export default isLoggedIn;
export {
  performLoginAction,
  isLoggedIn,
  performLogoutAction,
  simulateAccountCreation
};
