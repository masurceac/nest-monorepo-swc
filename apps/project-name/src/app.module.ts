import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGraphqlModule } from './graphql/graphql.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [AppGraphqlModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
