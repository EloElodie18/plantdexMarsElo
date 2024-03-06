import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';

const routes: Routes = [
  //Set route for url : http://localhost:4200
  { path: '', component: PageHomeComponent },
  //Set route for url : http://localhost:4200/my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  //Set route for url : http://localhost:4200/admin -> PageAdminComponent
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/new-plant', component: PageNewPlantComponent },
  { path: 'plant/details/:plantId', component: PagePlantDetailsComponent}, //mettre un path dynamique, nom pr recuperer la valeur en dynamique
  { path: 'admin/plant/edit/:plantId', component: PageEditPlantComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
