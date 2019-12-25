const loginData = () => {
  return sessionStorage.getItem("loginData")
    ? JSON.parse(sessionStorage.getItem("loginData"))
    : false;
};

const isLoggedIn = () => {
  return loginData().hasUserLoggedIn ? loginData().hasUserLoggedIn : false;
};

const performLoginAction = props => {
  const { email = "", password = "" } = props;
  const localLoginData = loginData();
  if (
    localLoginData &&
    localLoginData.email === email &&
    localLoginData.password === password
  )
    localLoginData.hasUserLoggedIn = true;
  else if (
    localLoginData &&
    localLoginData.email !== email &&
    localLoginData.password !== password
  )
    localLoginData.hasUserLoggedIn = false;
  else return localLoginData;
  sessionStorage.setItem("loginData", JSON.stringify(localLoginData));
  return localLoginData.hasUserLoggedIn;
};

const performLogoutAction = (props) => {
  const { checkPageUpdate = () => { } } = props
  const localLoginData = loginData();
  localLoginData.hasUserLoggedIn = false;
  sessionStorage.setItem("loginData", JSON.stringify(localLoginData));
  checkPageUpdate("logout")
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
  simulateAccountCreation,
  loginData
};
