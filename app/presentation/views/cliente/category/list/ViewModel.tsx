import React, {useEffect, useState} from "react";
import { Product } from "../../../../../domain/entities/Product";
import { GetProductsUseCase } from "../../../../../domain/useCases/productos/ProductUseCase";

export const useProductViewModel = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response: Product[] = await GetProductsUseCase();
            setProducts(response);
        } catch (error) {
            console.error("Error al cargar los productos" + error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getProducts();
            setLoading(false);
        };

        fetchData();
    },[]);

    return {
        products,
        getProducts,
    };
};
