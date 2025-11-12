import Product from "./product.js";
export default class DigitalProduct extends Product {
    fileSize: number;
    private tax;
    constructor(name: string, sku: string, price: number, fileSize: number);
    get fileSizes(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=DigitalProduct.d.ts.map