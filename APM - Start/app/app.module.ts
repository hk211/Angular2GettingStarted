import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-guard-service';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  declarations: [               // for components, directives and pipes that belong to this module
    AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent
  ],
  providers: [ ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
