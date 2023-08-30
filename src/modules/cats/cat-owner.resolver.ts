import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { OwnersService } from '../owner/owner.service';
import { Cat, Owner } from '../../graphql.schema';

@Resolver('Cat')
export class CatOwnerResolver {
    constructor(private readonly ownersService: OwnersService) {}

    @ResolveField()
    async owner(@Parent() cat: Cat & { ownerId: number }): Promise<Owner> {
        return this.ownersService.findOneById(cat.ownerId);
    }
}
