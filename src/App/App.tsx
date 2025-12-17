import type { ReactElement } from "react";

import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "antd";

import Router from "./Router";
import Layout from "./Layout";

const App = (): ReactElement => {
   return (
      <BrowserRouter>
         <ConfigProvider>
            <Layout>
               <Router />
            </Layout>
         </ConfigProvider>
      </BrowserRouter>
   );
};

export default App;
