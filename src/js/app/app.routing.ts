import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "../detail/detail.component";

const routes: Routes = [
    { path: 'detail', component: DetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [DetailComponent]
})
export class AppRoutingModule {}