import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat, UpdateCatInput } from '../../graphql.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Resolver('Cat')
export class CatsResolver {
    constructor(private readonly catsService: CatsService) {}

    @Query('cats')
    async getCats() {
        return this.catsService.findAll();
    }

    @Query('cat')
    async findOneById(@Args('id') id: string): Promise<Cat> {
        return this.catsService.findOneById(id);
    }

    @Mutation('createCat')
    async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
        const createdCat = this.catsService.create(args);
        return createdCat;
    }

    @Mutation('updateCat')
    async update(@Args('updateCatInput') args: UpdateCatInput): Promise<Cat> {
        const updatedCat = this.catsService.update(args);
        return updatedCat;
    }

    @Mutation('deleteCat')
    async delete(@Args('id') id: string): Promise<Cat> {
        const deletedCat = this.catsService.delete(id);
        return deletedCat;
    }
}
