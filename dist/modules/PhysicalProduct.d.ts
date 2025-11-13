import Product from "./product.js";
import type { DiscountableProduct } from "./DiscountableProduct .js";
export default class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;
    private tax;
    qty: number;
    constructor(name: string, sku: string, price: number, weight: number, qty?: number);
    get weightKg(): string;
    getPriceWithTax(): string;
    applyDiscount(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map