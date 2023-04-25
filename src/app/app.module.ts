import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';


import { MatButtonModule } from '@angular/material/button';
import { ProductListFormComponent } from './product-list/product-list-form/product-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAlertsComponent } from './product-list/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListFormComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TopBarComponent,
    ProductCartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    //MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
