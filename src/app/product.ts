export interface Product {
  key?: string;
  productnumber: number;
  productname: string;
  productCategory: string;
  imageUrl: string;
  productmaxsellingprice: number;
  productoursellingprice?: number;
  quantityinstock: number;
  productstorearea?: number;
  productshell?: number;
  cssClass?: string;
}
