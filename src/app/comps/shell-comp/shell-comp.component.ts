import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderContainerComponent } from '../header/header-container/header-container.component';

@Component({
  selector: 'app-shell-comp',
  templateUrl: './shell-comp.component.html',
  styleUrls: ['./shell-comp.component.css']
})
export class ShellCompComponent {
 
  @ViewChild('headerLoader', {read: ViewContainerRef}) headerLoader!: ViewContainerRef;



  loadComponent() {
    // this.headerLoader.clear();
    if (this.headerLoader.length) {
      this.headerLoader.detach()
    } else {
    this.headerLoader.createComponent(HeaderContainerComponent);
    }
  }
}
