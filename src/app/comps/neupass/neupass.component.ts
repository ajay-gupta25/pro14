import { Component } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-neupass',
  templateUrl: './neupass.component.html',
  styleUrls: ['./neupass.component.css']
})
export class NeupassComponent {

  public salesProducts: any = [
    {id: 1, name: 'Laptop', price: 100},
    {id: 2, name: 'Mobile', price: 400},
    {id: 3, name: 'Television', price: 700},
    {id: 4, name: 'Camera', price: 3000}
  ]

  public topProducts: any = [
    {id: 1, name: 'Acs', price: 100},
    {id: 2, name: 'Phones', price: 400},
    {id: 3, name: 'Fashion', price: 700},
    {id: 4, name: 'Electronics', price: 3000}
  ]

  public allImages: any = [];
  public carousel3c1: any = [];
  public carousel3c2: any = [];
  public carousel3c3: any = [];
  public carousel3c4: any = [];

  constructor(private processService: ProcessService) {
    this.carousel3c1 = this.processService.generateImageUrl("400", 3, 0, false);
    this.carousel3c2 = this.processService.generateImageUrl("400", 6, 0, true);
    this.carousel3c3 = this.processService.generateImageUrl("400", 4, 1, false);
    this.carousel3c4 = this.processService.generateImageUrl("400", 7, 1, true);
    
    this.allImages = this.processService.generateImageUrl("950/400", 3, 0, false);
    this.allImages = this.allImages.concat(this.processService.generateImageUrl("950/400", 3, 0, true));
    this.allImages = this.allImages.concat(this.processService.generateImageUrl("950/400", 1, 0, false));
    this.allImages = this.allImages.concat(this.processService.generateImageUrl("950/400", 3, 2, true));
  }


}
