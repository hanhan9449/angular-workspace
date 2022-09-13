import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import {EditComponent} from "./edit/edit.component";
import {IsAdminGuard} from "shared";

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
      path: 'edit',
      component: EditComponent,
      canActivate: [IsAdminGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {}
