import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepository";
import { Product } from "../../entities/Product";

const { getAllProducts } = new ProductRepositoryImpl();

export const GetProductsUseCase = async (): Promise<Product[]> => {
    return await getAllProducts();
};
