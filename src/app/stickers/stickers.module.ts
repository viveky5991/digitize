import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DieCutStickerComponent } from "./die-cut-sticker/die-cut-sticker.component";
const  routes = [
    { path: 'diecutsticker', component: DieCutStickerComponent },
    { path: 'print&cutsticker', component: DieCutStickerComponent },
    { path: 'paperstickergloss', component: DieCutStickerComponent },
    { path: 'transparentsticker', component: DieCutStickerComponent },
    { path: 'pvcwhitesticker', component: DieCutStickerComponent },
    { path: 'whiteinksticker', component: DieCutStickerComponent },
    { path: 'epoxysticker', component: DieCutStickerComponent },
    { path: 'windshieldsticker', component: DieCutStickerComponent },
    { path: 'foilsticker', component: DieCutStickerComponent },
    { path: 'embossingsealsticker', component: DieCutStickerComponent },
    { path: 'helmetsticker', component: DieCutStickerComponent },
    { path: 'kraftpapersticker', component: DieCutStickerComponent },
];
@NgModule({
    declarations:[],
    imports:[CommonModule,RouterModule.forChild(routes)]
   
})
export class StickerModule{};