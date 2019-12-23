const TopOptionGenerator = props => {
  const {userHasLoggedIn} = props
  console.log("isLoggedIn: ",props.userHasLoggedIn)
  let topOptions = ["home"];
  if (!userHasLoggedIn && !topOptions.includes("signin", "signup"))
    topOptions.push("signin", "signup");
  if(!topOptions.includes("cart"))
      topOptions.push("cart");
  if (userHasLoggedIn && !topOptions.includes("logout"))
    topOptions.push("logout");
  return topOptions;
};

const ExtraPages = () => {
  return ["foodlist"]
}

export default TopOptionGenerator;
export { TopOptionGenerator, ExtraPages };
