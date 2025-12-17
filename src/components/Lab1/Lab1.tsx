import { useState, type ReactElement } from "react";

import { Flex, Typography, Card, Input } from "antd";

import { KbToMbAdapter, Kilobyte } from "./Lab1.classes";

const Lab1 = (): ReactElement => {
   const [valueKb, setValueKb] = useState<number | null>(null);
   const [isErrorText, setIsErrorText] = useState(false);

   const kbData = new Kilobyte(valueKb as number);
   const mbData = new KbToMbAdapter(kbData);

   const handleChangeInput = (value: string) => {
      const numberValue = Number(value);

      if (
         typeof numberValue !== "number" ||
         numberValue < 0 ||
         isNaN(numberValue)
      ) {
         setIsErrorText(true);
         return;
      }

      setIsErrorText(false);
      setValueKb(numberValue);
   };

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №1
            </Typography.Title>
            <Typography.Text>
               Перевод из килобайт (КБ) в мегабайты (МБ)
            </Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical gap="4px">
               <Flex vertical gap="4px">
                  <Input
                     placeholder="Введите килобайты"
                     value={valueKb ?? ""}
                     onChange={(e) => handleChangeInput(e.target.value)}
                     status={isErrorText ? "error" : "success"}
                     showCount
                     prefix="КБ"
                     allowClear
                  />
                  <Typography.Text type={isErrorText ? "danger" : undefined}>
                     {isErrorText
                        ? "Введите корректное значение"
                        : `Результат: ${mbData.convertToMb()} мегабайт`}
                  </Typography.Text>
               </Flex>
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab1;
