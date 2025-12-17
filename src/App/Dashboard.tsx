import type { ReactElement } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Flex, Typography } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

import { labsRouter } from "./config/routers";

const Dashboard = (): ReactElement => {
   const navigate = useNavigate();

   return (
      <Flex vertical>
         <Typography.Title level={1}>
            Лабораторные работы по предмету МиТПИС (Куропаткин А.М.)
         </Typography.Title>
         <Flex gap="16px" wrap>
            {labsRouter.map((elem) => (
               <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate(elem.path)}
                  icon={<DesktopOutlined />}
               >
                  {elem.label}
               </Button>
            ))}
         </Flex>
      </Flex>
   );
};

export default Dashboard;
