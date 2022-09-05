export interface IBaseService<T> {
    create(dto: any): Promise<T>

    findAll(): Promise<T[]>

    findOne(id: number): Promise<T>

    update(id: number, dto: any): Promise<void>

    remove(id: number): Promise<void>
}