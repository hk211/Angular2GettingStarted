import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // to get the productid from the url
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    templateUrl: 'app/products/product-detail.component.html',
})

export class ProductDetailComponent implements OnInit{
    // there are 2 ways to get the parameter, snapshot or an observable
    // use snapshot if you only want to get the   
    // get the parameter from the url
    //   console.log(this._route.snapshot.params['id'])
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { 
    }

    // routing with code
    onBack(): void {
        this._router.navigate(['/products']);
    }

    pageTitle: string = 'Product Detail';

    ngOnInit(): void {
        this.product = this._productService.getProducts();

        console.log()

        // the + is a shortcut to convert the string to a numeric id
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
}


