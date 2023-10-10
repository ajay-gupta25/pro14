import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';
import { ChildContainerComponent } from '../child-container/child-container.component';
import { HeaderContainerComponent } from '../header/header-container/header-container.component';

@Component({
  selector: 'app-comps-interaction',
  templateUrl: './comps-interaction.component.html',
  styleUrls: ['./comps-interaction.component.css']
})
export class CompsInteractionComponent implements OnInit {
  productName = "sample pro 1";
  items: any = [];
  // productList = [{"productName": "Sample Product", "productPrice":"10"}];
  productList: any = []
  brandList: any = [];
  headerCarousel: any = [];


  constructor (public processService: ProcessService) {
    this.headerCarousel = this.processService.generateImageUrl("700/200", 7, 0, false);
  }

  ngOnInit() {
    this.processService.brand.subscribe((brand: any) => {
      console.log(brand);
      // alert(brand.data);
      if(brand.message == 'listing') {
        this.brandList.push(brand);
      }
    });
  }

  addProduct(name: any, price: any){
    // alert('Product added fetched from child store: '+name+price.price);
    this.productList.push({"productName": name.name, "productPrice":price.price});
  }
}

