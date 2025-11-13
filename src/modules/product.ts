
export default class Product{
   name: string;
   sku: string;
   price: number;
  constructor(name: string, sku: string, price: number) {
    this.name = name;
    this.sku = sku;
    this.price = price;
  }



    displayDetails():void{
    console.log(this.name+" "+this.sku+" ");
   }
    getPriceWithTax():string{

    return `$${(this.price * 1).toFixed(2)}`;

   }

}
 