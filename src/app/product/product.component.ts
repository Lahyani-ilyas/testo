
import {Component, OnInit} from '@angular/core';
import { ProductMockService } from './product.mock.service';
import {Product} from '../Shared/product';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Projet';
  produits: Product[];
  constructor(private produitservice: ProductMockService) {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
this.produits = this.produitservice.getProduits();
  }
}
