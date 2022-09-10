import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ChangeUsernameComponent,
    SmsAppComponent
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
