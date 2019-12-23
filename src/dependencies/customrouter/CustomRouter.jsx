import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import capitalizeFirstLetter from 'src/dependencies/capitalizefirstletter'

const ComponentLoader = loadable(props => {
  console.log('p',props.pageName)
  return import(
    /*webpackChunkName: "[request]" */
    `src/pages/${props.pageName}/${props.pageName}.jsx`
  );
});

const CustomRouter = props => {
  return (
    <div className="d-flex mt-1 justify-content-center w-100">
      <Switch>
        {props.MenuOptions.map(data => {
          return (
            <Route
              exact
              path={"/" + capitalizeFirstLetter(data)}
              key={`${props[data]}_${data}`}
              render={() => <ComponentLoader initialLoaderCheck={props.initialLoaderCheck} pageName={capitalizeFirstLetter(data)} />}
            />
          );
        })}
        {props.ExtraPages?props.ExtraPages.map((data,index) => {
          const capitalizedData = capitalizeFirstLetter(data)
          console.log('capitalizedData',capitalizedData)
          return (
            <Route
              exact
              path={`/${capitalizedData}/:id`}
              key={`${'index'}_${data}`}
              render={() => <ComponentLoader pageName={capitalizedData} />}
            />
          );
        }):''}
      </Switch>
    </div>
  );
};

export default CustomRouter;
export { CustomRouter };
