import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagsComponent } from "./components/tags/tags.component";

@NgModule({
    imports: [CommonModule],
    declarations: [TagsComponent],
    exports: [TagsComponent]
})
export class TagsModule { }