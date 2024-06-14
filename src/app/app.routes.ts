import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PolicyComponent } from './policy/policy/policy.component';
import { TermsComponent } from './policy/terms/terms.component';

export const routes: Routes = [
  //
  { path: '', component: HomeComponent },

  // {
  //   path: '',
  //   loadChildren: () => import('./marketprint/marketprint.module').then(m => m.MarketprintModule)
  // },
  //business-cards,voucher,hang-tag,sticker-gloss,pvcwhite,epoxy (listing)
  {
    path: '',
    loadChildren: () => import('./stationary/stationary.module').then(m => m.StationaryModule)
  },

  //letter-heads,envelopes,folders,notepads,notebook&journal,thankyoucard,calendars (img+content)
  {
    path: '',
    loadChildren: () => import('./imgcontent/imgcontent.module').then(m => m.ImgcontentModule)
  },
  //selfink-stamps,waxseal,embossingseal,flyers,compliment-slips,Coupons,Tent-Cards

  {
    path: '',
    loadChildren: () => import('./imgcontent1/imgcontent1.module').then(m => m.Imgcontent1Module)
  },
  //die-cut,print-cut,transparent,whiteink,embossingseal,kraftpaper
  {
    path: '',
    loadChildren: () => import('./imgcontent2/imgcontent2.module').then(m => m.Imgcontent2Module)
  },
  //Window-Vinyl,Window-Graphics,OneWay-Vision,Wall-Vinyl,Wall-Graphics,Canvas,Wooden,Acrylic,MetalArt
  {
    path: '',
    loadChildren: () => import('./imgcontent3/imgcontent3.module').then(m => m.Imgcontent3Module)
  },
  //Unlit3D,Frontlit3D,Backlit3D,Outlit3D,PushThrough3D,Neon3D
  {
    path: '',
    loadChildren: () => import('./imgcontent4/imgcontent4.module').then(m => m.Imgcontent4Module)
  },
  //FlexFace,Frontlit3D,Backtlit3D,PushThrough,Neon,FlexFace-LightBox,Fabric,Acrylic,Poster
  {
    path: '',
    loadChildren: () => import('./imgcontent5/imgcontent5.module').then(m => m.Imgcontent5Module)
  },
  //SelfStanding,WallMounted,Hanging,Directory,Metal,Wooden,AcrylicLetters,ForexFoam
  {
    path: '',
    loadChildren: () => import('./imgcontent6/imgcontent6.module').then(m => m.Imgcontent6Module)
  },
  //MetalPlates,AcrylicPlates,WoodenPlates,TableTopPlates,TraffolytePVCAcrylic,MetalLabels,WoodenLabels,AcrylicLabels
  {
    path: '',
    loadChildren: () => import('./imgcontent7/imgcontent7.module').then(m => m.Imgcontent7Module)
  },
  //SailFlags,TearDropFlags,ShapeFlags,ladeFlags,elescopicFlags,arFlags,arDesert,ashboard
  {
    path: '',
    loadChildren: () => import('./imgcontent8/imgcontent8.module').then(m => m.Imgcontent8Module)
  },
  //Pennant,Bunting,Toothpick,Poleflags,Handflags,FinishLine,BodyFlags,FanScarf
  {
    path: '',
    loadChildren: () => import('./imgcontent9/imgcontent9.module').then(m => m.Imgcontent9Module)
  },
  //Hoisting,WallMounted,Stadium,Advertising,Festival,TableFlags,TableFlagsRoyal,ConferenceFlags,ConferenceFlagsHanging
  {
    path: '',
    loadChildren: () => import('./imgcontent10/imgcontent10.module').then(m => m.Imgcontent10Module)
  },
  //Pens,PUNotebooks,PUOrganizer,MousePad,TShirt,Jersey,Caps,NeckTie,SafetyVest
  {
    path: '',
    loadChildren: () => import('./imgcontent11/imgcontent11.module').then(m => m.Imgcontent11Module)
  },
  //Wristband,NameBadges,Lanyards,IDCardsBadgeReel,Keychain,Mugs,Bottles,Tumblers
  {
    path: '',
    loadChildren: () => import('./imgcontent12/imgcontent12.module').then(m => m.Imgcontent12Module)
  },
 // Paperbag,Kraftbag,NonWovenbag,Jutebag,Totebag,Canvasbag,Drawstringbag,CottonStringbag
  {
    path: '',
    loadChildren: () => import('./imgcontent13/imgcontent13.module').then(m => m.Imgcontent13Module)
  },
  //Office & Store Branding#ReverseCut-Frosted, Vehicle Graphics#vehicle-graphics
  {
    path: '',
    loadChildren: () => import('./imgcontent14/imgcontent14.module').then(m => m.Imgcontent14Module)
  },
  //magnetic,ceremonial
  {
    path: '',
    loadChildren: () => import('./imgcontent15/imgcontent15.module').then(m => m.Imgcontent15Module)
  },
//popups,fabric-popups,rollup-banners,x-banners,banners-flex,fence-banners,lama-stand
  {
    path: '',
    loadChildren: () => import('./imgcontent16/imgcontent16.module').then(m => m.Imgcontent16Module)
  },

  //wooden-backdrop,repeat-backdrop,backdrop-indoor,backdrop-outdoor,popout-banner,toblerone-frame,cutout-standee
  {
    path: '',
    loadChildren: () => import('./imgcontent17/imgcontent17.module').then(m => m.Imgcontent17Module)
  },

  //promotion,exhibition-counter,tent-canopy,parasol-umbrella,cover-cloth,media-frame,foam-board,shell-scheme,flag-base
  {
    path: '',
    loadChildren: () => import('./imgcontent18/imgcontent18.module').then(m => m.Imgcontent18Module)
  },
  //binding#brochures ,certificates#brochures ,booklets#brochures ,foil#brochures
  {
    path: '',
    loadChildren: () => import('./bannercontent/bannercontent.module').then(m => m.BannercontentModule)
  },
  //brochures#brochures ,Tickets-Coupons#brochures ,Window-Films#brochures
  {
    path: '',
    loadChildren: () => import('./highlightbook/highlightbook.module').then(m => m.HighlightbookModule)
  },
  //wind-shield,helmet,floor-stickers,posters,repositionable
  {
    path: '',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  // selfink-stamps,waxseal,embossingseal
  {
    path: '',
    loadChildren: () => import('./seals/seals.module').then(m => m.SealsModule)
  },
  //die-cut,print-cut,paperstickergloss,transparent,pvcwhite,whiteink,epoxy,windshield,foil,embossingseal,helmet,kraftpaper
//   {
//     path:'',
//     loadChildren: () => import('./stickers/stickers.module').then(m => m.StickerModule)
//   },
//   //Brochures,Flyers,Booklets
//   {
//     path:'',
//     loadChildren: () => import('./brochuresflyers/brochuresflyers.module').then(m =>m.BrochuresflyersModule)
//   },
//   //Compliment-Slips,Tickets-Coupons,ScratchWin-Coupons,Tent-Cards
//   {
//     path:'',
//     loadChildren: () => import('./crowdpromotions/crowdpromotions.module').then(m =>m.CrowdpromotionsModule)
//   },
//   // ReverseCut-Frosted,StandardCut-Frosted,Printed-Frosted,Blank-Frosted
//   {
//     path:'',
//     loadChildren: () => import('./frostedsticker/frostedsticker.module').then(m =>m.Frostedsticker)
//   },
//   //Window-Vinyl,Window-Graphics,OneWay-Vision,Window-Films
//   {
//     path:'',
//     loadChildren: () => import('./windowbranding/windowbranding.module').then(m =>m.Windowbranding)
//   },
  { path: 'Contact', component: ContactComponent },
  { path: 'About-us', component: AboutusComponent },
  // { path: 'Privacy-Policy', component: PolicyComponent },
  // { path: 'Terms', component: TermsComponent },
  {
    path: '',
    loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)
  },
// // Wall-Vinyl,Wall-Graphics
//   {
//     path:'',
//     loadChildren: () => import('./wallbranding/wallbranding.module').then(m =>m.Wallbranding)
//   },
// //Canvas,Wooden,Acrylic,MetalArt
//   {
//     path:'',
//     loadChildren: () => import('./wallframes/wallframes.module').then(m =>m.Wallframes)
//   },
// //Car-Door,Half-Wrap-Vehicle,Van-Branding
//   {
//     path:'',
//     loadChildren: () => import('./vehiclegraphics/vehiclegraphics.module').then(m =>m.Vehiclegraphics)
//   },
// //Unlit3D,Frontlit3D,Backlit3D,Outlit3D,PushThrough3D,Neon3D
//   {
//     path:'',
//     loadChildren: () => import('./indoor3D/indoor3D.module').then(m =>m.Indoor3D)
//   },
//   //FlexFace,Frontlit3D,Backtlit3D,PushThrough,Neon
//   {
//     path:'',
//     loadChildren: () => import('./signboard/signboard.module').then(m =>m.Signboard)
//   },
//   //FlexFace-LightBox,Fabric,Acrylic,Poster
//   {
//     path:'',
//     loadChildren: () => import('./lightboxsignages/lightboxsignages.module').then(m =>m.Lightboxsignages)
//   },
//   //SelfStanding,WallMounted,Hanging,Directory
//   {
//     path:'',
//     loadChildren: () => import('./directionwayfindingsignage/directionwayfindingsignage.module').then(m =>m.Directionwayfindingsignage)
//   },
//   //Metal,Wooden,AcrylicLetters,ForexFoam
//   {
//     path:'',
//     loadChildren: () => import('./selfstandingletters/selfstandingletters.module').then(m =>m.Selfstandingletters)
//   },
  //MetalPlates,AcrylicPlates,WoodenPlates,TableTopPlatesSign
  // {
  //   path:'',
  //   loadChildren: () => import('./nameplate/nameplate.module').then(m =>m.Nameplate)
  // },
  // //TraffolytePVCAcrylic,MetalLabels,WoodenLabels,AcrylicLabels
  // {
  //   path:'',
  //   loadChildren: () => import('./labels/labels.module').then(m =>m.Labels)
  // },

  // //CarFlags,CarDesert,Dashboard,Pennant,Bunting,Toothpick
  // {
  //   path:'',
  //   loadChildren: () => import('./decorativeflags/decorativeflags.module').then(m =>m.Decorativeflags)
  // },
  // //Poleflags,Handflags,FinishLine,BodyFlags,FanScarf
  // {
  //   path:'',
  //   loadChildren: () => import('./handheldflags/handheldflags.module').then(m =>m.Handheldflags)
  // },
  //Hoisting,WallMounted,Stadium,Advertising,Festival
  // {
  //   path:'',
  //   loadChildren: () => import('./outdoorflags/outdoorflags.module').then(m =>m.Outdoorflags)
  // },
  // //TableFlags,TableFlagsRoyal,ConferenceFlags,ConferenceFlagsHanging
  // {
  //   path:'',
  //   loadChildren: () => import('./officeflags/officeflags.module').then(m =>m.Officeflags)
  // },
  // //PopUps,FabricPopUps,RollupBanners,XBanners,BannersFlexFabric,FenceBanners,LamaStand
  // {
  //   path:'',
  //   loadChildren: () => import('./popupsrollupsbanners/popupsrollupsbanners.module').then(m =>m.Popupsrollupsbanners)
  // },
  // //WoodenBackdrop,StepRepeat,FabricIndoor,FabricOutdoor,PopoutBannerSpring,TobleroneFrame,CutoutStandee
  // {
  //   path:'',
  //   loadChildren: () => import('./backdropsstandees/backdropsstandees.module').then(m =>m.Backdropsstandees)
  // },
  // //PromotionTable,ExhibitionCounters,TentCanopyGazebo,ParasolUmbrella,TableCoverCloth,SocialMediaFrame,FoamBoard,ShellSchemeBooth
  // {
  //   path:'',
  //   loadChildren: () => import('./exhibitionevents/exhibitionevents.module').then(m =>m.Exhibitionevents)
  // },
  // //Pens,PUNotebooks,PUOrganizer,MousePad
  // {
  //   path:'',
  //   loadChildren: () => import('./officeessentials/officeessentials.module').then(m =>m.Officeessentials)
  // },
  // //TShirt,Jersey,Caps,NeckTie,SafetyVest
  // {
  //   path:'',
  //   loadChildren: () => import('./apparel/apparel.module').then(m =>m.Apparel)
  // },
  // //Wristband,NameBadges,Lanyards,IDCardsBadgeReel,Keychain,USB
  // {
  //   path:'',
  //   loadChildren: () => import('./tradeshowsevents/tradeshowsevents.module').then(m =>m.Tradeshowsevents)
  // },
  // //Mugs,Bottles,Tumblers
  // {
  //   path:'',
  //   loadChildren: () => import('./drinkware/drinkware.module').then(m =>m.Drinkware)
  // },
  // //Paperbag,Kraftbag,NonWovenbag,Jutebag,Totebag,Canvasbag,Drawstringbag,CottonStringbag
  // {
  //   path:'',
  //   loadChildren: () => import('./shoppingpromotionalbags/shoppingpromotionalbags.module').then(m =>m.Shoppingpromotionalbags)
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
