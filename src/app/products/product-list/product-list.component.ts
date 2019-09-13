import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';

import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(
    private productService: ProductService,
    private store: Store<fromProduct.State>
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromProduct.getCurrentProduct))
      .subscribe(currentProduct => (this.selectedProduct = currentProduct));

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => (this.products = products),
      error: (err: any) => (this.errorMessage = err.error)
    });

    this.store
      .pipe(select(fromProduct.getShowProductCode))
      .subscribe(showProductCode => {
        this.displayCode = showProductCode;
      });
  }

  ngOnDestroy(): void {}

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(new productActions.InitializeCurrrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productActions.SetCurrrentProduct(product));
  }
}