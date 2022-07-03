import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoFloorComponent } from './casino-floor/casino-floor.component';
import { CrapsComponent } from './craps/craps.component';

const routes: Routes = [
  { path: '', component: CasinoFloorComponent },
  { path: 'Craps', component: CrapsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
