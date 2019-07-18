import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductMockService } from './product/product.mock.service';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  // contient la liste des modules externe
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // contien la lisete des service
  providers: [ProductMockService],
  // la liste des composant en a app.commpent.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
