import Product from "./product.js";
import type { DiscountableProduct } from "./DiscountableProduct .js";
export default class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;
    private tax;
    constructor(name: string, sku: string, price: number, weight: number);
    get weightKg(): string;
    getPriceWithTax(): number;
    applyDiscount(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map