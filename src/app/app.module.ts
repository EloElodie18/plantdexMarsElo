import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPlantComponent } from './components/card-plant/card-plant.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IconComponent } from './components/icon/icon.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { FormPlantComponent } from './components/form-plant/form-plant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    CardPlantComponent,
    FilterSideBarComponent,
    SearchBarComponent,
    IconComponent,
    PageNewPlantComponent,
    FormPlantComponent,
    PagePlantDetailsComponent,
    PageEditPlantComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
