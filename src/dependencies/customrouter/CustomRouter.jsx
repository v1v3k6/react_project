import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import capitalizeFirstLetter from 'src/dependencies/capitalizefirstletter'

const ComponentLoader = loadable(props => {
  console.log(props.pageName)
  return import(
    /*webpackChunkName: "[request]" */
    `src/pages/${props.pageName}/${props.pageName}.jsx`
  );
});

const CustomRouter = optionSet => {
  optionSet.initialLoaderCheck(false);
  console.log(optionSet.MenuOptions)
  return (
    <div className="d-flex mt-1 justify-content-center w-100">
      <Switch>
        {optionSet.MenuOptions.map(data => {
          return (
            <Route
              exact
              path={"/" + capitalizeFirstLetter(data)}
              key={`${optionSet[data]}_${data}`}
              render={() => <ComponentLoader pageName={capitalizeFirstLetter(data)} />}
            />
          );
        })}
        {optionSet.ExtraPages?optionSet.ExtraPages.map((data,index) => {
          return (
            <Route
              exact
              path={"/" + capitalizeFirstLetter(data)+":id"}
              key={`${index}_${data}`}
              render={() => <ComponentLoader pageName={capitalizeFirstLetter(data)} />}
            />
          );
        }):''}
      </Switch>
    </div>
  );
};

export default CustomRouter;
export { CustomRouter };
