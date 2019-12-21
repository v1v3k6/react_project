import React from 'react'
import {
    Route, Switch,
  } from "react-router-dom"
import loadable from '@loadable/component'

const capitalizeFirstLetter = (capitalizedText) => {
    capitalizedText = capitalizedText[0].toUpperCase() + capitalizedText.slice(1)
    return capitalizedText
} 

const ComponentLoader = loadable( props => {
    const pageName=capitalizeFirstLetter(props.pageName)
    return import(/*webpackChunkName: "[request]" */ `src/pages/${pageName}/${pageName}.jsx`)
})

const CustomRouter = (optionSet) => {
    return (
        <>
            <Switch>
                {Object.keys(optionSet).map((data)=>{
                    console.log(optionSet[data])
                    return <Route exact path={"/"+optionSet[data]} key={`${optionSet[data]}_${data}`} render={() => <ComponentLoader pageName={optionSet[data]} />} />
                })}
            </Switch>
        </>
    )
}

export default CustomRouter
export { CustomRouter }