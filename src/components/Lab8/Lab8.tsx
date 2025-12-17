import type { ReactElement } from "react";

import { Flex, Typography } from "antd";

const Lab8 = (): ReactElement => {
   return (
      <Flex vertical>
         <Typography.Title level={3}>Лабораторная работа №8</Typography.Title>
         <Flex vertical>
            <Typography>Содержание</Typography>
         </Flex>
      </Flex>
   );
};

export default Lab8;
