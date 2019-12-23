import isLoggedIn from "src/dependencies/loginvalidator";
let topOptions = ["home"];

const TopOptionGenerator = props => {
  const { userHasLoggedIn } = props;
  if (isLoggedIn() && !topOptions.includes("logout")) {
    topOptions.push("logout");
    userHasLoggedIn(isLoggedIn());
  } else if (!isLoggedIn() && !topOptions.includes("signin", "signup")) {
    topOptions.push("signin", "signup");
    userHasLoggedIn(isLoggedIn());
  }
  return topOptions;
};

const ExtraPages = () => {
  return ["foodlist"]
}

export default TopOptionGenerator;
export { TopOptionGenerator, ExtraPages };
