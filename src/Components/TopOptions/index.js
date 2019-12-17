import React from 'react'

const topOptions = ["Home", "Sign In", "Sign Up"]

const RenderTopOptionSet = () => {
    return topOptions.map(data=>{
        return <div key={data}>{data}</div>
    })
}

export default RenderTopOptionSet
export {RenderTopOptionSet}