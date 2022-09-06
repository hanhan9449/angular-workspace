import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { EditComponent } from "./edit/edit.component";
import { NewComponent } from "./new/new.component";
import { PostComponent } from "./post.component";

const routes: Routes = [
    {
        path: '',
        component: PostComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'new',
        component: NewComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}