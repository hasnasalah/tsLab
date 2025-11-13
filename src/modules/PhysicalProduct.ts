
import Product from "./product.js"
import { calculateTax } from "../utils/taxCalculator.js";
import type {DiscountableProduct}  from "./DiscountableProduct .js";
 export default class PhysicalProduct extends Product implements DiscountableProduct{
    weight: number;
    private tax:number=10;
     constructor(name: string, sku: string, price: number,weight: number) 
     {super(name,sku,price);
        this.weight=weight;
     };
    get weightKg(){
         const weightInKg = this.weight * 0.453592;
    return weightInKg.toFixed(1)+"Kg";
    }
    getPriceWithTax():number{

    return calculateTax(this.price,this.tax) ;
    }

   applyDiscount():number{
  return this.price*0.1;
   }
}