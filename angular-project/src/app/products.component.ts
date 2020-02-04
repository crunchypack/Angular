import { Component } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent {
  productName = "A book";
  isDisabled = true;
  products = ["A book", "A tree"];
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
  onAddProduct() {
    this.products.push(this.productName);
  }
}
