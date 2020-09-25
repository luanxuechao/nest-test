import { Module,forwardRef } from '@nestjs/common';
import { CommonsController } from './commons.controller';
import { CommonsService } from './commons.service';
import{CatsModule}from './../cats/cats.module'
@Module({
    imports:[forwardRef(()=>CatsModule)],
  controllers: [CommonsController],
  providers: [CommonsService],
  exports:[CommonsService]
})
export class CommonsModule {}
