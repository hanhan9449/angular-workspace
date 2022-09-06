import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { PostComponent } from "./post.component";

const routes: Routes = [
    {
        path: '',
        component: PostComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}