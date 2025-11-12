export default class Product {
    name;
    sku;
    price;
    constructor(name, sku, price) {
        this.name = name;
        this.sku = sku;
        this.price = price;
    }
    displayDetails() {
        console.log(this.name + " " + this.sku + " ");
    }
    getPriceWithTax() {
        return this.price * 1;
    }
}
//# sourceMappingURL=product.js.map