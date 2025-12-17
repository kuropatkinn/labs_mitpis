import type { ReactElement } from "react";

import { Flex, Typography, Card } from "antd";

import { Basket, Product } from "./Lab7.classes";

const Lab7 = (): ReactElement => {
   const basket = new Basket();

   const productPlayStation5 = new Product("Sony PlayStation 5", 50000, 10);
   const productIPhone17Pro = new Product("Apple IPhone 17 Pro", 100000);
   const productAppleWatchUltra3 = new Product("Apple Watch Ultra 3", 70000);
   const productRtx5090 = new Product("Nvidia RTX 5090", 300000, 20);

   basket.addProduct(productPlayStation5);
   basket.addProduct(productIPhone17Pro);
   basket.addProduct(productAppleWatchUltra3);
   basket.addProduct(productRtx5090);

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №7
            </Typography.Title>
            <Typography.Text>
               Компоновщик для расчета стоимости товара электроники в корзине
            </Typography.Text>
         </Flex>
         <Flex vertical style={{ width: 600 }}>
            <Flex justify="space-between" align="center">
               <Typography.Title level={3}>Корзина:</Typography.Title>
               <Typography.Title level={4}>
                  Сумма: {basket.getSum()} рублей
               </Typography.Title>
            </Flex>
            <Flex vertical gap="8px">
               {basket.getListProducts().map((product) => {
                  const isDiscount = product?.discount;
                  const salaryWithDiscount =
                     basket.getCurrentSalaryWithDiscount(product);

                  return (
                     <Card>
                        <Flex vertical>
                           <Typography.Title level={5}>
                              {product.name}
                           </Typography.Title>
                           <Typography.Text type="secondary">
                              Цена:{" "}
                              <Typography.Text
                                 type="secondary"
                                 delete={isDiscount ? true : undefined}
                              >
                                 {product.salary} рублей{" "}
                              </Typography.Text>
                              {isDiscount && (
                                 <Typography.Text type="secondary">
                                    {salaryWithDiscount} рублей
                                 </Typography.Text>
                              )}
                           </Typography.Text>
                           {isDiscount && (
                              <Typography.Text type="secondary">
                                 Скидка: {product?.discount} %
                              </Typography.Text>
                           )}
                        </Flex>
                     </Card>
                  );
               })}
            </Flex>
         </Flex>
      </Flex>
   );
};

export default Lab7;
