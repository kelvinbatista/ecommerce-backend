import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '../cache/cache.module';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [CacheModule,TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
