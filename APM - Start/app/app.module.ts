import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [                    // for pulling in external modules
    BrowserModule, HttpModule, FormsModule 
  ],
  declarations: [               // for components, directives and pipes that belong to this module
    AppComponent, ProductListComponent, ProductFilterPipe, StarComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
