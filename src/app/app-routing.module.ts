import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AuthenGuard } from './services/authen/authen.guard';
import { ResourceComponent } from './pages/resource/resource.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'houses',
    component: ResourceComponent
  },
  {
    path: 'books',
    component: ResourceComponent
  },
  {
    path: 'characters',
    component: ResourceComponent
  },
  {
    path: '**',
    redirectTo: 'overview'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
