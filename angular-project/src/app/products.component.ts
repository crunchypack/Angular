import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "./products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = "A book";
  isDisabled = true;
  products = [];
  private productsSubcription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubcription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }
  onAddProduct(form) {
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }

    // this.products.push(this.productName);
  }
  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
  ngOnDestroy() {
    this.productsSubcription.unsubscribe();
  }
}
