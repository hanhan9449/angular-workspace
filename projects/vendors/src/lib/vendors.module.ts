import { NgModule } from '@angular/core';
import { VendorsComponent } from './vendors.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContainerComponent } from './page-container/page-container.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatListModule} from '@angular/material/list'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VendorsComponent,
    HeaderComponent,
    FooterComponent,
    PageContainerComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    VendorsComponent,
    HeaderComponent,
    FooterComponent,
    PageContainerComponent,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule

  ]
})
export class VendorsModule { }
