
import Product from "./product.js"
import { calculateTax } from "../utils/taxCalculator.js";
import type {DiscountableProduct}  from "./DiscountableProduct .js";
 export default class PhysicalProduct extends Product implements DiscountableProduct{
    weight: number;
    private tax:number=10;
    qty:number;
     constructor(name: string, sku: string, price: number,weight: number,qty: number=1) 
     {super(name,sku,price);
        this.weight=weight;
        this.qty=qty;
     };
    get weightKg(){
         const weightInKg = this.weight * 0.453592;
    return weightInKg.toFixed(1)+"Kg";
    }
    getPriceWithTax():string{

      const originalPrice = calculateTax(this.price, this.tax) * this.qty;
        const discount = this.applyDiscount(); 
        return    `$${(originalPrice-discount).toFixed(2)}`;
    }
// reuse the apply discount for bukkly item 
   applyDiscount():number{
      
   if(this.qty===5){
         return this.price*0.05
      }

   
   else if(this.qty >=10){

      return  this.price*0.1}
      else return 0;

   }

}