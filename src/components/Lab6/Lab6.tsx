import { type ReactElement, useState } from "react";

import { Flex, Typography, Card, Input, Button, Alert } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import { Scooter, SecurityProxyScooter } from "./Lab6.classes";

const Lab6 = (): ReactElement => {
   const scooter = new Scooter();

   const scooterProxyVpn = new SecurityProxyScooter(scooter);

   const [sum, setSum] = useState(0);
   const [statusConnectType, setStatusConnectType] = useState<
      "success" | "error"
   >("success");
   const [statusConnectText, setStatusConnectText] = useState("");
   const [isErrorText, setIsErrorText] = useState(false);

   const handleChangeInput = (value: string) => {
      const numberValue = Number(value);

      if (
         !numberValue ||
         typeof numberValue !== "number" ||
         numberValue < 0 ||
         isNaN(numberValue)
      ) {
         setIsErrorText(true);
         return;
      }

      setIsErrorText(false);
      setSum(numberValue);
   };

   const handleClickButton = () => {
      try {
         setStatusConnectType("success");
         setStatusConnectText(scooterProxyVpn.start(sum));
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
               Лабораторная работа №6
            </Typography.Title>
            <Typography.Text>Прокси для аренды самоката</Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical gap="4px">
               <Flex vertical gap="4px">
                  <Typography.Text type="secondary">
                     Оплатите 100 рублей
                  </Typography.Text>
                  <Input
                     placeholder="Оплатите 100 рублей"
                     value={sum ?? ""}
                     onChange={(e) => handleChangeInput(e.target.value)}
                     status={isErrorText ? "error" : "success"}
                     allowClear
                  />
                  <Button
                     type="primary"
                     onClick={handleClickButton}
                     icon={<CheckCircleOutlined />}
                  >
                     Оплатить {sum} рублей
                  </Button>
               </Flex>
               {isErrorText && (
                  <Typography.Text type="danger">
                     Введите корректное значение
                  </Typography.Text>
               )}

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

export default Lab6;
