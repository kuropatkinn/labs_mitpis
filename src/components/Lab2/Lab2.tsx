import type { ReactElement } from "react";

import { Flex, Typography, Card } from "antd";

import {
   BlueCar,
   RedCar,
   Starter,
   Camera,
   CameraAdapter,
} from "./Lab2.classes";

const Lab2 = (): ReactElement => {
   const starter = new Starter();

   const blueCar = new BlueCar();
   const redCar = new RedCar();

   const camera = new Camera();

   const cameraAdapterRace = new CameraAdapter(camera);

   return (
      <Flex vertical gap="16px">
         <Flex vertical>
            <Typography.Title level={3}>
               Лабораторная работа №2
            </Typography.Title>
            <Typography.Text>Адаптер для камеры и гонки</Typography.Text>
         </Flex>
         <Card style={{ width: 600 }}>
            <Flex vertical>
               <Typography>{starter.start(blueCar)}</Typography>
               <Typography>{starter.start(redCar)}</Typography>
               <Typography>{starter.start(cameraAdapterRace)}</Typography>
            </Flex>
         </Card>
      </Flex>
   );
};

export default Lab2;
