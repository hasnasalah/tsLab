import Product from "./product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export default class PhysicalProduct extends Product {
    weight;
    tax = 10;
    constructor(name, sku, price, weight) {
        super(name, sku, price);
        this.weight = weight;
    }
    ;
    get weightKg() {
        const weightInKg = this.weight * 0.453592;
        return weightInKg.toFixed(1) + "Kg";
    }
    getPriceWithTax() {
        return calculateTax(this.price, this.tax);
    }
}
//# sourceMappingURL=PhysicalProduct.js.map