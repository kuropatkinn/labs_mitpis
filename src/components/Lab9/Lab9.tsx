import type { ReactElement } from "react";

import { Flex, Typography, Card } from "antd";

import { DecorationsFactory } from "./Lab9.classes";

const Lab9 = (): ReactElement => {
   const decorationsFactory = new DecorationsFactory();

   const smallBlue = decorationsFactory.getDecoration("small", "blue");
   const smallBlue2 = decorationsFactory.getDecoration("small", "blue");

   const largeRed = decorationsFactory.getDecoration("large", "red");
   const mediumPurple = decorationsFactory.getDecoration("medium", "Purple");
   const largeRed2 = decorationsFactory.getDecoration("large", "red");

   smallBlue.hang(2);
   smallBlue2.hang(3);
   largeRed.hang(10);
   mediumPurple.hang(5);
   largeRed2.hang(22);

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №9
            </Typography.Title>
            <Typography.Text>
               Легковес украшения на новогодней елке
            </Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>Смотреть логи F12</Card>
      </Flex>
   );
};

export default Lab9;
