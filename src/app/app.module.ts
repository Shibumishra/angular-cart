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
import { ThemeComponent } from './components/theme/theme.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { NewShoppingCartComponent } from './components/new-shopping-cart/new-shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ChangeUsernameComponent,
    SmsAppComponent,
    ThemeComponent,
    RegisterComponent,
    AuthUserComponent,
    NewShoppingCartComponent,
    ProductComponent,
    PipesComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
