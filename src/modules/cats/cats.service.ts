import { Injectable } from '@nestjs/common';
import { Cat } from '../../graphql.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CatsService {
    private cats: Array<Cat & { ownerId?: number }> = [{ id: uuidv4(), name: 'Vaisya', age: 5, ownerId: 1 }];

    create(cat: Cat): Cat {
        cat.id = uuidv4();
        this.cats.push(cat);
        return cat;
    }

    update(cat: Cat): Cat {
        let updatedCat: Cat;
        this.cats = this.cats.map((catInner: Cat) => {
            if (catInner.id === cat.id) {
                updatedCat = {
                    ...catInner,
                    ...cat
                };

                return updatedCat;
            }

            return catInner;
        });

        return updatedCat;
    }

    delete(id: string): Cat {
        const deletedCat = this.cats.find((cat: Cat) => cat.id === id);
        this.cats = this.cats.filter((cat: Cat) => cat.id !== id);

        return deletedCat;
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOneById(id: string): Cat {
        return this.cats.find(cat => cat.id === id);
    }
}
