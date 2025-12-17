import { useState, type ReactElement } from "react";

import { Flex, Typography, Input, Card } from "antd";

class ConverterMb {
   private kb?: number;

   setKb(value?: number) {
      if (typeof value !== "number" || value < 0 || isNaN(value)) {
         throw new Error("Некорректное значение килобайт");
      }

      this.kb = value;
   }

   getMb(): string {
      if (this.kb === undefined) return "0.00";
      return (this.kb / 1024).toFixed(2);
   }

   getKb(): number | undefined {
      return this.kb;
   }
}

const converterInstance = new ConverterMb();

const Lab1 = (): ReactElement => {
   const [valueKb, setValueKb] = useState("");
   const [isErrorText, setIsErrorText] = useState(false);

   const handleChangeInput = (value: string) => {
      try {
         converterInstance.setKb(Number(value));
         setIsErrorText(false);
      } catch {
         setIsErrorText(true);
      }

      setValueKb(value);
   };

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №1:
            </Typography.Title>
            <Typography.Text>
               Перевод из килобайт (КБ) в мегабайты (МБ)
            </Typography.Text>
         </Flex>
         <Card style={{ width: 700 }}>
            <Flex vertical gap="4px">
               <Flex vertical gap="4px">
                  <Input
                     placeholder="Введите килобайты"
                     value={valueKb ?? ""}
                     onChange={(e) => handleChangeInput(e.target.value)}
                     status={isErrorText ? "error" : "success"}
                     style={{ width: "500px" }}
                     showCount
                  />
                  <Typography>
                     {isErrorText
                        ? "Введите корректное значение"
                        : `Результат: ${converterInstance.getMb()} мегабайт`}
                  </Typography>
               </Flex>
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab1;
