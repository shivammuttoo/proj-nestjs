import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessesModule } from './businesses/businesses.module';

@Module({
  imports: [BusinessesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
