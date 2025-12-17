import { type ReactElement } from "react";

import { Route, Routes } from "react-router-dom";

import { labsRouter } from "./config/routers";
import Dashboard from "./Dashboard";

const Router = (): ReactElement => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         {labsRouter.map((route) => (
            <Route path={route.path} element={route.components} />
         ))}
      </Routes>
   );
};

export default Router;
