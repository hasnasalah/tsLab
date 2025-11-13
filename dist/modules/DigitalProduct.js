import Product from "./product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export default class DigitalProduct extends Product {
    fileSize;
    tax = 0;
    constructor(name, sku, price, fileSize) {
        super(name, sku, price);
        this.fileSize = fileSize;
    }
    ;
    get fileSizes() {
        return (this.fileSize + "MB");
    }
    getPriceWithTax() {
        return `$${calculateTax(this.price, this.tax).toFixed(2)}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map