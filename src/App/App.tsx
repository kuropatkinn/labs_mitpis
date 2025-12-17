import type { ReactElement } from "react";

import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "antd";

import Router from "./Router";

const App = (): ReactElement => {
   return (
      <BrowserRouter>
         <ConfigProvider>
            <Router />
         </ConfigProvider>
      </BrowserRouter>
   );
};

export default App;
