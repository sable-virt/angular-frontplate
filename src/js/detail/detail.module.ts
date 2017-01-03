import {NgModule} from '@angular/core';
import {DetailComponent} from './detail.component';
import {DetailRoutingModule} from './detail.routing';

@NgModule({
    imports: [
        DetailRoutingModule
    ],
    declarations: [
        DetailComponent
    ]
})
export class DetailModule {}