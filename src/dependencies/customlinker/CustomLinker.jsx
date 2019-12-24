import React from "react";
import { Link } from "react-router-dom";

const CustomLinker = props => {
  const {optionSet = {}, cartValue={} }=props
  return (
    <>
      {Object.keys(optionSet).map(data => {
        return (
          <Link
            to={'/'+optionSet[data]}
            key={`index_${optionSet[data]}`}
            className="ml-4 highlighter-link p-2 rounded text-capitalize text-white"
          >
            {optionSet[data]=="cart"?`${optionSet[data]} - ${cartValue?cartValue:0}`:`${optionSet[data]}`}
          </Link>
        );
      })}
    </>
  );
};

export default CustomLinker;
export { CustomLinker };
