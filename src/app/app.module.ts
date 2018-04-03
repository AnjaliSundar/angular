import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import { FormsModule} from "@angular/forms";
import {} from "@angular/common/http"

import {RemotecallService} from"./remotecall.service"



import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shpo/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { TodoComponent } from './task/todo/todo.component';
import { ApiComponent } from './http/api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
RouterModule.forRoot([
{
path:"catalog",
component:CatalogComponent
},
{
path:"products",
component:TodoComponent
},
{
  path:"todo",
  component:TodoComponent
  },
{
  path:"remote",
  component:ApiComponent
  }
]),
],
providers: [RemotecallService],
bootstrap: [AppComponent]
})
export class AppModule { } 


