import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderContainerComponent } from './comps/header/header-container/header-container.component';
import { ProcessService } from './services/process.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pro14';

}

