
import DigitalProduct from "./modules/DigitalProduct.js";
import PhysicalProduct from "./modules/PhysicalProduct.js";
import Product from "./modules/product.js";
import {sortByPrice,sortByName} from "./utils/sort.js";
 const newPhysicalProduct=new PhysicalProduct("T-shirt","T14OS45",10.99,0.5);
const newDigitalProduct=new DigitalProduct("Photo Editor Pro","PE487SSI4",50.79,264);
 const secondPhysicalProduct=new PhysicalProduct("new born mitten","N14OS45",21.99,1);
const secondDigitalProduct=new DigitalProduct("E-book","E487SSI4",15.79,12);
 const thirdPhysicalProduct=new PhysicalProduct("boots","B14OS45",116.99,3);
const thirdDigitalProduct=new DigitalProduct("Fitness Tracker App","FTA147B",49.79,30);

const products: Product[]=[newPhysicalProduct,newDigitalProduct,secondPhysicalProduct,secondDigitalProduct,thirdDigitalProduct,thirdPhysicalProduct];
const sortByP=sortByPrice(products);
const sortByN=sortByName(products);
for( const product of sortByP){
    product.displayDetails();
      if (product instanceof PhysicalProduct) {
    console.log("Weight:", product.weightKg);
    console.log("Price: ",product.getPriceWithTax())
  } else if (product instanceof DigitalProduct) {
    console.log("File Size:", product.fileSizes);
    console.log("Price: ",product.getPriceWithTax())
  }
}
console.log("Sorted By Name");
// sort by price 
for( const product of sortByN){
    product.displayDetails();
      if (product instanceof PhysicalProduct) {
    console.log("Weight:", product.weightKg);
    console.log("Price: ",product.getPriceWithTax())
  } else if (product instanceof DigitalProduct) {
    console.log("File Size:", product.fileSizes);
    console.log("Price: ",product.getPriceWithTax())
  }
}

