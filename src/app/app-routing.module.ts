import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildContainerComponent } from './comps/child-container/child-container.component';
import { CompsInteractionComponent } from './comps/comps-interaction/comps-interaction.component';
import { LoginComponent } from './comps/login/login.component';
import { NeupassComponent } from './comps/neupass/neupass.component';
import { RegisterComponent } from './comps/register/register.component';
import { ShellCompComponent } from './comps/shell-comp/shell-comp.component';
import { RoughCarouselComponent } from './comps/widgets/rough-carousel/rough-carousel.component';
import { SipComponent } from './inv/sip/sip.component';

const routes: Routes = [
  {path: '', component: ShellCompComponent,
    children: [
      {path: 'interaction', component: CompsInteractionComponent},
      {path: 'projection', component: NeupassComponent},
      {path: 'rough-carousel', component: RoughCarouselComponent},
      {path: 'sip', component: SipComponent},
      { path: '', redirectTo: '/interaction', pathMatch: 'full' },
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // { path: '**', redirectTo: '/interaction', pathMatch: 'full' }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
