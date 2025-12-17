import type { PropsWithChildren, ReactElement } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Flex } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Layout = (props: PropsWithChildren): ReactElement => {
   const navigate = useNavigate();

   return (
      <Flex vertical style={{ margin: "24px 48px" }}>
         {window.location.pathname !== "/" && (
            <Button
               type="primary"
               size="large"
               icon={<ArrowLeftOutlined />}
               onClick={() => navigate("/")}
               style={{ width: "150px" }}
            >
               Назад
            </Button>
         )}
         {props.children}
      </Flex>
   );
};

export default Layout;
