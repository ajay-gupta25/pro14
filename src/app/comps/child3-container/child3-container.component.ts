import { Component } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-child3-container',
  templateUrl: './child3-container.component.html',
  styleUrls: ['./child3-container.component.css']
})
export class Child3ContainerComponent {

  constructor(public process: ProcessService) {

  }

  addBrand(name: string) {
    console.log('ajay testing brand ' + name);
    // alert('ajay testing product'+name + price);
    // this.process.globalUserList.push(name);
    this.process.sendMessage({'message': 'listing', 'data': name});
  }

  sendBrnadToSibling(brand: string) {
    this.process.sendMessage({'message': 'connection', 'data': brand});

  }
}
