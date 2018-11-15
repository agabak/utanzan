import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'ut-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 pageTitle = 'Product List';
 imageWidth = 50;
 imageMargin = 2;
 products: IProduct[];
 showImage = false;
 errorMessage: string;
 _listFilter: string;

 get listFilter(): string {
   return this._listFilter;
 }

 set listFilter(value: string) {
   this._listFilter = value;
   this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
 }

 filterProducts: IProduct[];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
     this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filterProducts = this.products;
      } ,
      error => this.errorMessage = <any>error
    );
    }

  toggleImage(): void {
    this.showImage = ! this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    if (this.products.length) {
      const products = this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      return products;
    }
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List : '  + ' ' + message;
  }
}

