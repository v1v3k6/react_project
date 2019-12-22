import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const capitalizeFirstLetter = capitalizedText => {
  capitalizedText = capitalizedText[0].toUpperCase() + capitalizedText.slice(1);
  return capitalizedText;
};

const ComponentLoader = loadable(props => {
  return import(
    /*webpackChunkName: "[request]" */
    `src/pages/${capitalizeFirstLetter(props.pageName)}/${capitalizeFirstLetter(
      props.pageName
    )}.jsx`
  );
});

const CustomRouter = optionSet => {
  return (
    <div className="d-flex mt-1 justify-content-center w-100">
      <Switch>
        {Object.keys(optionSet).map(data => {
          return (
            <Route
              exact
              path={"/" + optionSet[data]}
              key={`${optionSet[data]}_${data}`}
              render={() => <ComponentLoader pageName={optionSet[data]} />}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default CustomRouter;
export { CustomRouter };
