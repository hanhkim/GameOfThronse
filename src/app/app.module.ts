import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { ResourceItemComponent } from './pages/resource-item/resource-item.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResourceHeaderComponent } from './components/resource-header/resource-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    ResourceComponent,
    ResourceItemComponent,
    HeaderComponent,
    FooterComponent,
    ResourceHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
