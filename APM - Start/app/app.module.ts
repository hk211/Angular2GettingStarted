import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  declarations: [               // for components, directives and pipes that belong to this module
    AppComponent, WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
