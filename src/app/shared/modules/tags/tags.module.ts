import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagsComponent } from "./components/tags/tags.component";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TagsComponent],
    exports: [TagsComponent]
})
export class TagsModule { }