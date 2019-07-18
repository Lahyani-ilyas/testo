import {Injectable} from '@angular/core';
import {Product} from '../Shared/product';

@Injectable()
export class ProductMockService {
  private Produits: Product[] = [];
  constructor() {
    let p1: Product = new Product('livre', 30 , 20);
    let p2: Product = new Product('stylo', 40 , 10);
    let p3: Product = new Product('cartable', 20 , 110);
    this.Produits.push(p1);
    this.Produits.push(p2);
    this.Produits.push(p3);


    }
  public getProduits(): Product[] {
return this.Produits;
  }
}

