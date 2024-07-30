import { FindOneOptions, FindManyOptions } from "typeorm";

export abstract class RepositoryAbs {
    create(_props: any): any{}
    findAll(_props: FindManyOptions): any{}
    findOne(_props: FindOneOptions): any{}
    updateByCondition(_props: FindOneOptions): any{}
    deleteByCondition(_props: FindOneOptions): any{}
}