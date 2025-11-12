
import Product from "./product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export default class DigitalProduct extends Product{
    fileSize: number;
    private tax:number=0;
     constructor(name: string, sku: string, price: number,fileSize: number) 
     {super(name,sku,price);
        this.fileSize=fileSize;
     };
    get fileSizes(){
         
    return (this.fileSize+"MS");
    }
    getPriceWithTax():number{

    return calculateTax(this.price,this.tax) ;

   }

}