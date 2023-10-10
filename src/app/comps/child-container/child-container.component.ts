import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.css']
})
export class ChildContainerComponent {

  @Input() proName: any;
  @Output() data = new EventEmitter<any>()
  addProduct(name: string, price: any) {
    console.log('ajay testing product');
    // alert('ajay testing product'+name + price);
    this.data.emit({name, price});
  }
}
