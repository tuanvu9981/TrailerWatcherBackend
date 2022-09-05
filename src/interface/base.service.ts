import { Repository } from "typeorm";
import { IBaseService } from "./i.base.service";

export abstract class BaseService<T> implements IBaseService<T>{
    protected readonly repository: Repository<T>;

    constructor() {}

    async create(dto: any): Promise<T> {
        return await this.repository.save(dto);
    }

    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    abstract findOne(id: any): Promise<T>;

    async update(id: number, dto: any): Promise<void> {
        await this.repository.update(id, dto);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}