import { useState, type ReactElement } from "react";

import { Flex, Typography, Card, Input, Button, Alert } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import { SecurityProxyVpn, Vpn } from "./Lab5.classes";

const Lab5 = (): ReactElement => {
   const vpn = new Vpn();

   const securityProxyVpn = new SecurityProxyVpn(vpn);

   const [otpCode, setOtpCode] = useState("");
   const [statusConnectType, setStatusConnectType] = useState<
      "success" | "error"
   >("success");
   const [statusConnectText, setStatusConnectText] = useState("");

   const handleConnectVpn = () => {
      try {
         setStatusConnectType("success");
         setStatusConnectText(securityProxyVpn.connect(otpCode));
      } catch (e) {
         setStatusConnectType("error");
         if (e instanceof Error) setStatusConnectText(e.message);
         else setStatusConnectText("Error");
      }
   };

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №5
            </Typography.Title>
            <Typography.Text>
               Прокси для подключения к ВПН с помощью ОТП
            </Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical gap="16px">
               <Flex gap="16px">
                  <Input.OTP onChange={(value) => setOtpCode(value)} />
                  <Button
                     type="primary"
                     onClick={handleConnectVpn}
                     icon={<CheckCircleOutlined />}
                  >
                     Подключиться к ВПН
                  </Button>
               </Flex>
               {statusConnectText && (
                  <Alert
                     title={statusConnectText}
                     type={statusConnectType}
                     showIcon
                  />
               )}
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab5;
