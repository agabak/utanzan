import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './share/convert-to-space.pipe';
import { StarComponent } from './share/star.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
