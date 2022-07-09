export class Products{
    id:string;
    imageUrl:string;
    name:string;
    originalPrice:string;
    discountedPrice:string;
    category:string;




constructor(id: string,imageUrl: string,name: string,originalPrice: string,discountedPrice: string,category: string)
{
    this.id=id;
    this.imageUrl=imageUrl;
    this.name=name;
    this.originalPrice=originalPrice;
    this.discountedPrice=discountedPrice;
    this.category=category;
    
}
}

