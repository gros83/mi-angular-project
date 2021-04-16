import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ValidationDemoComponent } from './validation-demo/validation-demo.component';
import { TableModule} from "primeng/table" 
import { HttpClientModule } from "@angular/common/http"
import { InputTextModule } from "primeng/inputtext"
import {ButtonModule} from 'primeng/button';

const appRoutes: Routes = [
  {path:'login', component: ValidationDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationDemoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
