import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ValidationDemoComponent } from './validation-demo/validation-demo.component';

const appRoutes: Routes = [
  {path:'books', component: ValidationDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationDemoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
