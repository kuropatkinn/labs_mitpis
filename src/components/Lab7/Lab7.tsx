import type { ReactElement } from "react";

import { Flex, Typography } from "antd";

const Lab7 = (): ReactElement => {
   return (
      <Flex vertical>
         <Typography.Title level={3}>Лабораторная работа №7</Typography.Title>
         <Flex vertical>
            <Typography>Содержание</Typography>
         </Flex>
      </Flex>
   );
};

export default Lab7;
