import React, { Suspense } from "react";
import Loader from "./Loader/Loader";
const withLazy = (Component) => {
  const LazyComponent = React.lazy(Component);

  return (props) => {
    return (
      <Suspense fallback={<Loader />}>{<LazyComponent {...props} />}</Suspense>
    );
  };
};

export default withLazy;
