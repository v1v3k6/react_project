const capitalizeFirstLetter = capitalizedText => {
  capitalizedText = capitalizedText[0].toUpperCase() + capitalizedText.slice(1);
  return capitalizedText;
};

export default capitalizeFirstLetter
export {capitalizeFirstLetter}