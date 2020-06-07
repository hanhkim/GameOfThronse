import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AuthenGuard } from './services/authen/authen.guard';
import { ResourceComponent } from './pages/resource/resource.component';
import { ResourceItemComponent } from './pages/resource-item/resource-item.component';

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
    component: ResourceComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'houses/:id',
    component: ResourceItemComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'books',
    component: ResourceComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'books/:id',
    component: ResourceItemComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'characters',
    component: ResourceComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: 'characters/:id',
    component: ResourceItemComponent,
    canActivate: [AuthenGuard]
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
