import { Product } from "../entities/Product";

export interface ProductRepository {
    getAllProducts(): Promise<Product[]>;
}
