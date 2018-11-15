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
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
                console.log(this.route.snapshot.paramMap.get('id'));
              }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.product = {
      'productId': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': new Date('October 15, 2015'),
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    };
  }

  backButton() {
    this.router.navigate(['/products']);
  }

}
