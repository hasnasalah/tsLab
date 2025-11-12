import DigitalProduct from "./modules/DigitalProduct.js";
import PhysicalProduct from "./modules/PhysicalProduct.js";
import Product from "./modules/product.js";
const newPhysicalProduct = new PhysicalProduct("T-shirt", "T14OS45", 16.99, 0.5);
const newDigitalProduct = new DigitalProduct("USB", "U487SSI4", 50.79, 64);
const products = [newPhysicalProduct, newDigitalProduct];
for (const product of products) {
    product.displayDetails();
    if (product instanceof PhysicalProduct) {
        console.log("Weight:", product.weightKg);
        console.log("Price: ", product.getPriceWithTax());
    }
    else if (product instanceof DigitalProduct) {
        console.log("File Size:", product.fileSizes);
        console.log("Price: ", product.getPriceWithTax());
    }
}
//# sourceMappingURL=main.js.map