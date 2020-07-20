import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Suspense fallback={(
          <div className="row center-xs u-margin">
            <Loader className="col-xs-12" size="large" />
          </div>
        )}
        >
          <Component {...matchProps} />
        </Suspense>
      )}
    />
  );
};

export default PublicRoute;
