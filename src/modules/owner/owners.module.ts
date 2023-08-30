import { Module } from '@nestjs/common';
import { OwnersService } from './owner.service';

@Module({
    providers: [OwnersService],
    exports: [OwnersService]
})
export class OwnersModule {}
