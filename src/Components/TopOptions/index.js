import React from 'react'

const topOptions = ["Home", "Sign In", "Sign Up"]

const RenderTopOptionSet = () => {
    return topOptions.map(data=>{
        return <div className="ml-4 highlighter-link p-2 rounded" key={data}>{data}</div>
    })
}

export default RenderTopOptionSet
export {RenderTopOptionSet}