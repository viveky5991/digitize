import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DieCutStickerComponent } from "./die-cut-sticker/die-cut-sticker.component";
const  routes = [
    { path: 'die-cut', component: DieCutStickerComponent },
    { path: 'print-cut', component: DieCutStickerComponent },
    { path: 'paperstickergloss', component: DieCutStickerComponent },
    { path: 'transparent', component: DieCutStickerComponent },
    { path: 'pvcwhite', component: DieCutStickerComponent },
    { path: 'whiteink', component: DieCutStickerComponent },
    { path: 'epoxy', component: DieCutStickerComponent },
    { path: 'windshield', component: DieCutStickerComponent },
    { path: 'foil', component: DieCutStickerComponent },
    { path: 'embossingseal', component: DieCutStickerComponent },
    { path: 'helmet', component: DieCutStickerComponent },
    { path: 'kraftpaper', component: DieCutStickerComponent },
];
@NgModule({
    declarations:[],
    imports:[CommonModule,RouterModule.forChild(routes)]
   
})
export class StickerModule{};