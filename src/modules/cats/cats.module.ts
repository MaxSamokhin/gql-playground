import { Module } from '@nestjs/common';
import { OwnersModule } from '../owner/owners.module';
import { CatsService } from './cats.service';
import { CatOwnerResolver } from './cat-owner.resolver';
import { CatsResolver } from './cats.resolver';

@Module({
    imports: [OwnersModule],
    providers: [CatsService, CatsResolver, CatOwnerResolver]
})
export class CatsModule {}
