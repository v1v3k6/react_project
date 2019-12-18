import React from 'react'
import {
    Route,
  } from "react-router-dom";
import loadable from '@loadable/component'
import pathMap from './pathMap'

const ComponentLoader = loadable( props => {
    return import(/*webpackChunkName: "[request]" */ `src/Views/Pages/${props.pageName}`)
})

const RouteCreator = () => {
    return pathMap.map((data, index)=>{
        return <Route exact path={data.linkDir} key={`${data.linkDir}_${index}`} render={<ComponentLoader pathName={data.pathName} />} />
    })
}

export default RouteCreator
export { RouteCreator }