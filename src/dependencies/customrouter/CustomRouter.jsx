import React from 'react'
import {
    Route, Switch,
  } from "react-router-dom";
import loadable from '@loadable/component'

const ComponentLoader = loadable( props => {
    return import(/*webpackChunkName: "[request]" */ `src/pages/${props.pageName}`)
})

const CustomRouter = (optionSet) => {
    return (
        <>
            <Switch>
                {Object.keys(optionSet).map((data, index)=>{
                    return <Route exact path={data} key={`${data}_${index}`} render={() => <ComponentLoader pageName={data} />} />
                })}
            </Switch>
        </>
    )
}

export default CustomRouter
export { CustomRouter }