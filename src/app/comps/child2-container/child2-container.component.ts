import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-child2-container',
  templateUrl: './child2-container.component.html',
  styleUrls: ['./child2-container.component.css']
})
export class Child2ContainerComponent implements OnInit {

  user: string = '';
  constructor(public process: ProcessService) {

  }

  ngOnInit() {
    this.process.brand.subscribe((brand) => {
      console.log(brand);
      if (brand.message == 'connection') {
      this.user = brand.data;
      }
    })
  }

  addUser(name: string) {
    console.log('ajay testing product');
    // alert('ajay testing product'+name + price);
    this.process.globalUserList.push(name);
  }
}
