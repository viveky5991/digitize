import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DieCutStickerComponent } from "./die-cut-sticker/die-cut-sticker.component";
const  routes = [
    { path: 'DieCutSticker', component: DieCutStickerComponent },
];
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    declarations:[]
})
export class StickerModule{};