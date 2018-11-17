import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
                console.log(this.route.snapshot.paramMap.get('id'));
              }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductName(id).subscribe(
      product => {
          this.product = product;
      } ,
      error => this.errorMessage = <any>error
    );
  }

  backButton() {
    this.router.navigate(['/products']);
  }

}
