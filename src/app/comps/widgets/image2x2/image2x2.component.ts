import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image2x2',
  templateUrl: './image2x2.component.html',
  styleUrls: ['./image2x2.component.css']
})
export class Image2x2Component {

  @Input() products: any = [];
}
