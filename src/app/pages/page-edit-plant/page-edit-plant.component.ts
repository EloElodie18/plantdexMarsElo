import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-edit-plant',
  templateUrl: './page-edit-plant.component.html',
  styleUrls: ['./page-edit-plant.component.css'],
})
export class PageEditPlantComponent implements OnInit {
  
  plantEditToDisplay!: Plant;
  plantId!: number;
  
  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //snapshot = photo à un instant T, paramMap, objet mis a dispo par angular
    // console.log('le route params EDIT', routeParams);
    const plantIdFromRoute = Number(routeParams.get('plantId')); //convertir en nombre, plantId fait refe à mon app-routing, pr que ça devienne l'id de la plante à récupérer

    this.plantsService.getDetails(plantIdFromRoute).subscribe((unePlante) => {
      // console.log('exemple de recup id EDIT', routeParams.get('plantId'));
      // console.log('methode ok EDIT', unePlante);
      this.plantEditToDisplay = unePlante;
      // console.log('Détails de la plante EDIT :', this.plantEditToDisplay);
    });
  }

  modifPlante(plant: Plant) {
    this.plantsService.putEdit(plant.id, plant).subscribe((resp) => {
      console.log('Object plant à envoyer au service ', plant);
      // this.plantEditToDisplay = resp;      
      console.log('plante modifiée', resp);
      this.router.navigate(['/admin']);
    })
  }
}
/*NE FONCTIONNE PAS..*/
/* modifPlante (plant:Plant) {
    this.plantsService.putEdit(plant).subscribe({
      next: (response) => {
        this.plantEditToDisplay = response;
        console.log('plante modifiée', response);
      },
      error: () => {},      
    }); 

    };
  } */