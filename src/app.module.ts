import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CommonsModule } from './commons/common.module';


@Module({
  imports: [CatsModule,CommonsModule],
  controllers: [AppController ],
  providers: [AppService,]
})
export class AppModule {}
