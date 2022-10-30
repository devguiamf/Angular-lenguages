import { HomeComponent } from './home/home.component';
import { ChinesComponent } from './linguas/chines/chines.component';
import { InglesComponent } from './linguas/ingles/ingles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlemaoComponent } from './linguas/alemao/alemao.component';
import { EspanholComponent } from './linguas/espanhol/espanhol.component';

const routes: Routes = [
  {
    path:"",
   component: HomeComponent
  },{
    path:"ingles",
   component: InglesComponent
  },{
    path:"chines",
   component: ChinesComponent
  },{
    path:"alemao",
   component: AlemaoComponent
  },{
    path:"espanhol",
   component: EspanholComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
