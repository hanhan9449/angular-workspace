import { NgModule } from '@angular/core';
import { VendorsComponent } from './vendors.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContainerComponent } from './page-container/page-container.component'
import { MatToolbarModule } from '@angular/material/toolbar'



@NgModule({
  declarations: [
    VendorsComponent,
    HeaderComponent,
    FooterComponent,
    PageContainerComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    VendorsComponent,
    HeaderComponent,
    FooterComponent,
    PageContainerComponent,
    MatButtonModule,
    MatToolbarModule

  ]
})
export class VendorsModule { }
