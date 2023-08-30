import { CreateCatInput } from '../../../graphql.schema';
import { Min } from 'class-validator';

export class CreateCatDto implements CreateCatInput {
    @Min(1)
    age: number;
}
