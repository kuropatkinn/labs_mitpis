import type { ReactElement } from "react";

import { Flex, Typography, Card } from "antd";

import {
   HongKongWaffleSimple,
   HongKongWaffleWithChocolate,
   HongKongWaffleWithFruits,
   HongKongWaffleWithMix,
} from "./Lab3.classes";

const Lab3 = (): ReactElement => {
   const simpleWaffle = new HongKongWaffleSimple();

   const chocolateWaffle = new HongKongWaffleWithChocolate(simpleWaffle);

   const fruitsWaffle = new HongKongWaffleWithFruits(simpleWaffle);

   const mixWaffle = new HongKongWaffleWithMix(
      new HongKongWaffleWithChocolate(
         new HongKongWaffleWithFruits(simpleWaffle)
      )
   );

   const menu = [
      {
         label: "Стандартная гонконгская вафля",
         instance: simpleWaffle,
      },
      {
         label: "Гонконгская вафля с шоколадом",
         instance: chocolateWaffle,
      },
      {
         label: "Гонконгская вафля с фруктами",
         instance: fruitsWaffle,
      },
      {
         label: "Гонконгская вафля микс",
         instance: mixWaffle,
      },
   ];

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №3
            </Typography.Title>
            <Typography.Text>Декоратор для гонконгских вафель</Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Typography.Title level={3}>Меню</Typography.Title>
            <Flex vertical gap="16px">
               {menu.map((elem) => (
                  <Flex vertical>
                     <Typography.Title level={4}>
                        {elem.label}:
                     </Typography.Title>
                     <Typography.Text type="secondary">
                        Стоимость: {elem.instance.getCoast()} рублей
                     </Typography.Text>
                     <Typography.Text type="secondary">
                        Описание: {elem.instance.getDesc()}
                     </Typography.Text>
                  </Flex>
               ))}
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab3;
