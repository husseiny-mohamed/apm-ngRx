import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load Products',
  LoadSuccess = '[Product] Load Products Success',
  LoadFailed = '[Product] Load Products Failed',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail',
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  AddProductFail = '[Product] Add Product Fail',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  DeleteProductFail = '[Product] Delete Product Fail'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: Product[]) {}
}

export class LoadFailed implements Action {
  readonly type = ProductActionTypes.LoadFailed;
  constructor(public payload: string) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;
  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;
  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;
  constructor(public payload: string) {}
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.AddProduct;
  constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductActionTypes.AddProductSuccess;
  constructor(public payload: Product) {}
}

export class AddProductFail implements Action {
  readonly type = ProductActionTypes.AddProductFail;
  constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;
  constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;
  constructor(public payload: number) {}
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;
  constructor(public payload: string) {}
}

export type ProductActions =
  | ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFailed
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | AddProduct
  | AddProductSuccess
  | AddProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;
