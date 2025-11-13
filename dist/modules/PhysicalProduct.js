import Product from "./product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export default class PhysicalProduct extends Product {
    weight;
    tax = 10;
    qty;
    constructor(name, sku, price, weight, qty = 1) {
        super(name, sku, price);
        this.weight = weight;
        this.qty = qty;
    }
    ;
    get weightKg() {
        const weightInKg = this.weight * 0.453592;
        return weightInKg.toFixed(1) + "Kg";
    }
    getPriceWithTax() {
        const originalPrice = calculateTax(this.price, this.tax) * this.qty;
        const discount = this.applyDiscount();
        return `$${(originalPrice - discount).toFixed(2)}`;
    }
    // reuse the apply discount for bukkly item 
    applyDiscount() {
        if (this.qty === 5) {
            return this.price * 0.05;
        }
        else if (this.qty >= 10) {
            return this.price * 0.1;
        }
        else
            return 0;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map