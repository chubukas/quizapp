import { Route, Routes } from "react-router-dom";

import { routes } from "./allRoutes";

export const AllRoutes = () => {
  const routesComponets = routes.map(({ path, Component, ...rest }, key) => {
    return <Route key={key} path={path} element={<Component {...rest} />} />;
  });

  return (
    <>
      <Routes>{routesComponets}</Routes>
    </>
  );
};
