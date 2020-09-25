import { Module,forwardRef } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import {CommonsModule} from './../commons/common.module';

@Module({
 imports:[forwardRef(()=>CommonsModule)],
  controllers: [CatsController],
  providers: [CatsService],
  exports:[CatsService]
})
export class CatsModule {}
