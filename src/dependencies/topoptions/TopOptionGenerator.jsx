import isLoggedIn from "src/dependencies/loginvalidator";
let topOptions = ["home"];

const TopOptionGenerator = props => {
  if (isLoggedIn() && !topOptions.includes("logout"))
    topOptions.push("logout");
  else if (!isLoggedIn() && !topOptions.includes("signin", "signup"))
    topOptions.push("signin", "signup");
  return topOptions;
};

const ExtraPages = () => {
  return ["foodlist"]
}

export default TopOptionGenerator;
export { TopOptionGenerator, ExtraPages };
