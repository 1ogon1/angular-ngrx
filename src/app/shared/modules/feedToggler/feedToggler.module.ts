import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { feedTogglerComponent } from './components/feedToggler/feedToggler.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [feedTogglerComponent],
    exports: [feedTogglerComponent]
})
export class FeedTogglerModule { }