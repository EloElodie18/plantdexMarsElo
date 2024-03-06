import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-plant-details',
  templateUrl: './page-plant-details.component.html',
  styleUrls: ['./page-plant-details.component.css'],
})
export class PagePlantDetailsComponent implements OnInit {

   detailsPlante: Plant | undefined;
  
   constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;//snapshot = photo à un instant T, paramMap, objet mis a dispo par angular
    // console.log("le route params", routeParams);
    const plantIdFromRoute = Number(routeParams.get('plantId'));//convertir en nombre, plantId fait refe à mon app-routing, pr que ça devienne l'id de la plante à récupérer

    this.plantsService.getDetails(plantIdFromRoute).subscribe((unePlante) => {   
      // console.log('exemple de recup id', routeParams.get('plantId'));   
      // console.log('methode ok', unePlante);      
        this.detailsPlante = unePlante;
        // console.log('Détails de la plante :', this.detailsPlante);
    });
  }
}