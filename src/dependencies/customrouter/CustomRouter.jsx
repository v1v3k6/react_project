import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import PageNotFound from 'src/pages/PageNotFound'
import Logout from 'src/pages/Logout'
import capitalizeFirstLetter from 'src/dependencies/capitalizefirstletter'

const ComponentLoader = loadable(props => {
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
              render={() => <ComponentLoader userHasLoggedIn={props.userHasLoggedIn} initialLoaderCheck={props.initialLoaderCheck}
              pageName={capitalizeFirstLetter(data)} />}
            />
          );
        })}
        {props.ExtraPages?props.ExtraPages.map((data) => {
          const capitalizedData = capitalizeFirstLetter(data)
          return (
            <Route
              exact
              path={`/${capitalizedData}`}
              key={`${'index'}_${data}`}
              render={() => <ComponentLoader userHasLoggedIn={props.userHasLoggedIn} initialLoaderCheck={props.initialLoaderCheck}
              pageName={capitalizedData} />}
            />
          );
        }):''}
        <Route path="/logout" render={()=><Logout />} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default CustomRouter;
export { CustomRouter };
