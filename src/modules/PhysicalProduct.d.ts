import Product from "./product.js";
export default class PhysicalProduct extends Product {
    weight: number;
    private tax;
    constructor(name: string, sku: string, price: number, weight: number);
    get weightKg(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map