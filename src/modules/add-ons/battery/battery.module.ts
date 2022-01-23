import { Module } from '@nestjs/common';
import { BatteryController } from './controller/battery.controller';
import { BatteryGateway } from './battery.gateway';

@Module({
  controllers: [BatteryController],
  providers: [BatteryGateway],
})
export class BatteryModule {}
