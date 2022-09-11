import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
      path: 'edit',
      component: EditComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {}
