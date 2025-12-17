import type { ReactElement } from "react";

import { Card, Flex, Typography } from "antd";

import {
   DeliveryAir,
   DeliveryEarth,
   ExpressOrder,
   StandardOrder,
} from "./Lab8.classes";

const Lab8 = (): ReactElement => {
   const standardOrder = new StandardOrder(new DeliveryAir());
   const expressOrder = new ExpressOrder(new DeliveryEarth());

   const list = [{ order: standardOrder }, { order: expressOrder }];

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №8
            </Typography.Title>
            <Typography.Text>
               Мост: Отделение заказа от типа и способа доставки
            </Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical>
               {list.map((elem) => (
                  <Typography.Text>{elem.order.placeOrder()}</Typography.Text>
               ))}
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab8;
