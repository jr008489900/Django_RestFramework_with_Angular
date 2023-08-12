import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private apiUrl = 'http://127.0.0.1:8000/testapp/products/';
  private apiPOST = 'http://127.0.0.1:8000/testapp/products/create_product/'
  datalist:any;

  constructor(private http: HttpClient) {
    this.http.get(this.apiUrl).subscribe(response => {
      // Reload products list after successful creation
      this.datalist=response;
    });
    console.log(this.datalist);
  }

  createProduct() {
    var data = {
      name: "pineapple",
      description: "just pineapple",
      price: "922.00",
    }
    this.http.post(this.apiPOST, data).subscribe(response => {
      // Reload products list after successful creation
      this.datalist=response;
    });
  }
}
