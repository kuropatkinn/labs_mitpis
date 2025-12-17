import { type ReactElement } from "react";

import { Route, Routes } from "react-router-dom";

import { routers } from "./config/routers";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

const Router = (): ReactElement => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         {routers.map((route) => (
            <Route
               path={route.path}
               element={<Layout>{route.components}</Layout>}
            />
         ))}
      </Routes>
   );
};

export default Router;
