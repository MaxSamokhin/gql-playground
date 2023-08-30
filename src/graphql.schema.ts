
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UpdateCatInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
    id?: Nullable<string>;
}

export interface CreateCatInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export interface IQuery {
    cats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;
    cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface IMutation {
    createCat(createCatInput?: Nullable<CreateCatInput>): Nullable<Cat> | Promise<Nullable<Cat>>;
    updateCat(updateCatInput?: Nullable<UpdateCatInput>): Nullable<Cat> | Promise<Nullable<Cat>>;
    deleteCat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface Owner {
    id: number;
    name: string;
    age?: Nullable<number>;
}

export interface Cat {
    id?: Nullable<string>;
    name?: Nullable<string>;
    age?: Nullable<number>;
    owner?: Nullable<Owner>;
}

type Nullable<T> = T | null;
