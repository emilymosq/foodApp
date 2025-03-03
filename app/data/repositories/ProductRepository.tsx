import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Product } from "../../domain/entities/Product";
import { ApiDelivery } from "../source/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class ProductRepositoryImpl implements ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get("/products");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.error("Error al obtener productos:", e.response?.data);
            return [];
        }
    }
}
