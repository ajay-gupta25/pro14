import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildContainerComponent } from './comps/child-container/child-container.component';
import { HeaderContainerComponent } from './comps/header/header-container/header-container.component';
import { Child2ContainerComponent } from './comps/child2-container/child2-container.component';
import { Child3ContainerComponent } from './comps/child3-container/child3-container.component';
import { CompsInteractionComponent } from './comps/comps-interaction/comps-interaction.component';
import { Image2x2Component } from './comps/widgets/image2x2/image2x2.component';
import { NeupassComponent } from './comps/neupass/neupass.component';
import { CarouselComponent } from './comps/widgets/carousel/carousel.component';
import { RoughCarouselComponent } from './comps/widgets/rough-carousel/rough-carousel.component';
import { LoginComponent } from './comps/login/login.component';
import { ShellCompComponent } from './comps/shell-comp/shell-comp.component';
import { RegisterComponent } from './comps/register/register.component';
import { SipComponent } from './inv/sip/sip.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildContainerComponent,
    HeaderContainerComponent,
    Child2ContainerComponent,
    Child3ContainerComponent,
    CompsInteractionComponent,
    Image2x2Component,
    NeupassComponent,
    CarouselComponent,
    RoughCarouselComponent,
    LoginComponent,
    ShellCompComponent,
    RegisterComponent,
    SipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
