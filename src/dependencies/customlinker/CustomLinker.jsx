import React from 'react'
import {
    Link,
  } from "react-router-dom";

const CustomLinker = (optionSet) => {
    return (
        <>
            {Object.keys(optionSet).map((data)=>{
                return <Link
                    to={optionSet[data]}
                    key={`${optionSet[data]}_${data}`}
                    className="ml-4 highlighter-link p-2 rounded text-capitalize text-light">
                        {optionSet[data]}
                    </Link>
            })}
        </>
    )
}

export default CustomLinker
export { CustomLinker }