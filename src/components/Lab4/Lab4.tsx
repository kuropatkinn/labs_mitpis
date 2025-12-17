import type { ReactElement } from "react";

import { Flex, Typography, Card } from "antd";

import { WorkingGit, DeveloperWorked } from "./Lab4.classes";

const Lab4 = (): ReactElement => {
   const workingGit = new WorkingGit();

   const developerWork = new DeveloperWorked(workingGit);

   const actions = [
      {
         label: "Начало работы разработчика с гит",
         commandArray: developerWork.startWork(),
      },
      {
         label: "Конец работы разработчика с гит",
         commandArray: developerWork.endWork(),
      },
   ];

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №4
            </Typography.Title>
            <Typography.Text>Фасад для работы с Git</Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical gap="16px">
               {actions.map((action) => (
                  <Flex vertical>
                     <Typography.Title level={3}>
                        {action.label}
                     </Typography.Title>
                     <Flex vertical>
                        {action.commandArray.map((command) => (
                           <Typography.Text type="secondary">
                              {command}
                           </Typography.Text>
                        ))}
                     </Flex>
                  </Flex>
               ))}
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab4;
