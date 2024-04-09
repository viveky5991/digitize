import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: '',
    loadChildren: () => import('./marketprint/marketprint.module').then(m => m.MarketprintModule)
  },
  //business-cards,letter-heads,envelopes,folders,notepads,notebook&journal,binding,thankyoucard,certificates,calendars
  {
    path: '',
    loadChildren: () => import('./stationary/stationary.module').then(m => m.StationaryModule)
  },
  // selfink-stamps,waxseal,embossingseal
  {
    path: '',
    loadChildren: () => import('./seals/seals.module').then(m => m.SealsModule)
  },
  //die-cut,print-cut,paperstickergloss,transparent,pvcwhite,whiteink,epoxy,windshield,foil,embossingseal,helmet,kraftpaper
  {
    path:'',
    loadChildren: () => import('./stickers/stickers.module').then(m => m.StickerModule)
  },
  //Brochures,Flyers,Booklets
  {
    path:'',
    loadChildren: () => import('./brochuresflyers/brochuresflyers.module').then(m =>m.BrochuresflyersModule)
  },
  //Compliment-Slips,Tickets-Coupons,ScratchWin-Coupons,Tent-Cards
  {
    path:'',
    loadChildren: () => import('./crowdpromotions/crowdpromotions.module').then(m =>m.CrowdpromotionsModule)
  },
  // ReverseCut-Frosted,StandardCut-Frosted,Printed-Frosted,Blank-Frosted
  {
    path:'',
    loadChildren: () => import('./frostedsticker/frostedsticker.module').then(m =>m.Frostedsticker)
  },
  //Window-Vinyl,Window-Graphics,OneWay-Vision,Window-Films
  {
    path:'',
    loadChildren: () => import('./windowbranding/windowbranding.module').then(m =>m.Windowbranding)
  },
  { path: 'Contact', component: ContactComponent },
// Wall-Vinyl,Wall-Graphics
  {
    path:'',
    loadChildren: () => import('./wallbranding/wallbranding.module').then(m =>m.Wallbranding)
  },
//Canvas,Wooden,Acrylic,MetalArt
  {
    path:'',
    loadChildren: () => import('./wallframes/wallframes.module').then(m =>m.Wallframes)
  },
//Car-Door,Half-Wrap-Vehicle,Van-Branding
  {
    path:'',
    loadChildren: () => import('./vehiclegraphics/vehiclegraphics.module').then(m =>m.Vehiclegraphics)
  },
//Unlit3D,Frontlit3D,Backlit3D,Outlit3D,PushThrough3D,Neon3D
  {
    path:'',
    loadChildren: () => import('./indoor3D/indoor3D.module').then(m =>m.Indoor3D)
  },
  //FlexFace,Frontlit3D,Backtlit3D,PushThrough,Neon
  {
    path:'',
    loadChildren: () => import('./signboard/signboard.module').then(m =>m.Signboard)
  },
  //FlexFace-LightBox,Fabric,Acrylic,Poster
  {
    path:'',
    loadChildren: () => import('./lightboxsignages/lightboxsignages.module').then(m =>m.Lightboxsignages)
  },
  //SelfStanding,WallMounted,Hanging,Directory
  {
    path:'',
    loadChildren: () => import('./directionwayfindingsignage/directionwayfindingsignage.module').then(m =>m.Directionwayfindingsignage)
  },
  //Metal,Wooden,AcrylicLetters,ForexFoam
  {
    path:'',
    loadChildren: () => import('./selfstandingletters/selfstandingletters.module').then(m =>m.Selfstandingletters)
  },
  //MetalPlates,AcrylicPlates,WoodenPlates,TableTopPlatesSign
  {
    path:'',
    loadChildren: () => import('./nameplate/nameplate.module').then(m =>m.Nameplate)
  },
  //TraffolytePVCAcrylic,MetalLabels,WoodenLabels,AcrylicLabels
  {
    path:'',
    loadChildren: () => import('./labels/labels.module').then(m =>m.Labels)
  },
  //SailFlags,TearDropFlags,LShapeFlags,BladeFlags,TelescopicFlags
  {
    path:'',
    loadChildren: () => import('./advertisingflags/advertisingflags.module').then(m =>m.Advertisingflags)
  },
  //CarFlags,CarDesert,Dashboard,Pennant,Bunting,Toothpick
  {
    path:'',
    loadChildren: () => import('./decorativeflags/decorativeflags.module').then(m =>m.Decorativeflags)
  },
  //Poleflags,Handflags,FinishLine,BodyFlags,FanScarf
  {
    path:'',
    loadChildren: () => import('./handheldflags/handheldflags.module').then(m =>m.Handheldflags)
  },
  //Hoisting,WallMounted,Stadium,Advertising,Festival
  {
    path:'',
    loadChildren: () => import('./outdoorflags/outdoorflags.module').then(m =>m.Outdoorflags)
  },
  //TableFlags,TableFlagsRoyal,ConferenceFlags,ConferenceFlagsHanging
  {
    path:'',
    loadChildren: () => import('./officeflags/officeflags.module').then(m =>m.Officeflags)
  },
  //PopUps,FabricPopUps,RollupBanners,XBanners,BannersFlexFabric,FenceBanners,LamaStand
  {
    path:'',
    loadChildren: () => import('./popupsrollupsbanners/popupsrollupsbanners.module').then(m =>m.Popupsrollupsbanners)
  },
  //WoodenBackdrop,StepRepeat,FabricIndoor,FabricOutdoor,PopoutBannerSpring,TobleroneFrame,CutoutStandee
  {
    path:'',
    loadChildren: () => import('./backdropsstandees/backdropsstandees.module').then(m =>m.Backdropsstandees)
  },
  //PromotionTable,ExhibitionCounters,TentCanopyGazebo,ParasolUmbrella,TableCoverCloth,SocialMediaFrame,FoamBoard,ShellSchemeBooth
  {
    path:'',
    loadChildren: () => import('./exhibitionevents/exhibitionevents.module').then(m =>m.Exhibitionevents)
  },
  //Pens,PUNotebooks,PUOrganizer,MousePad
  {
    path:'',
    loadChildren: () => import('./officeessentials/officeessentials.module').then(m =>m.Officeessentials)
  },
  //TShirt,Jersey,Caps,NeckTie,SafetyVest
  {
    path:'',
    loadChildren: () => import('./apparel/apparel.module').then(m =>m.Apparel)
  },
  //Wristband,NameBadges,Lanyards,IDCardsBadgeReel,Keychain,USB
  {
    path:'',
    loadChildren: () => import('./tradeshowsevents/tradeshowsevents.module').then(m =>m.Tradeshowsevents)
  },
  //Mugs,Bottles,Tumblers
  {
    path:'',
    loadChildren: () => import('./drinkware/drinkware.module').then(m =>m.Drinkware)
  },
  //Paperbag,Kraftbag,NonWovenbag,Jutebag,Totebag,Canvasbag,Drawstringbag,CottonStringbag
  {
    path:'',
    loadChildren: () => import('./shoppingpromotionalbags/shoppingpromotionalbags.module').then(m =>m.Shoppingpromotionalbags)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
