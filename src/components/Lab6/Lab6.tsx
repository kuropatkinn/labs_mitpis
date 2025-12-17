import type { ReactElement } from "react";

import { Flex, Typography } from "antd";

const Lab6 = (): ReactElement => {
   return (
      <Flex vertical>
         <Typography.Title level={3}>Лабораторная работа №6</Typography.Title>
         <Flex vertical>
            <Typography>Содержание</Typography>
         </Flex>
      </Flex>
   );
};

export default Lab6;
