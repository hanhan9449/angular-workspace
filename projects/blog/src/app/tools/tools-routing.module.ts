import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import {ToolsComponent} from "./tools.component";

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent
  },
  {
    path: 'qr-code',
    component: QrCodeComponent
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.component').then(m => m.CameraComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
