import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  plantsToDisplay: Plant[] = [];
  allPlants: Plant[] = [];

  constructor(private plantsService: PlantsService) {} //injection dependance

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      //appeler mon service, pour acceder a mon observable et j'y souscrit via mon subscribe
      console.log(data);
      this.plantsToDisplay = [...data]; //fournir les donnes provenant de ma requete http, dc je peux acceder desormais a mes données
      this.allPlants = [...data];
      // /**
      //  * EXERCICE ALGO EN DESSOUS
      //  */
      // this.categoriesToSend = this.getCategoriesFromPlants(data);
    });
  }

  onClickDeletePlant(plantId: number) {//j'appel le service ds cette methode et vient le modifier
    this.plantsService.deletePlant(plantId).subscribe({ //désigne planteService pour la modifier, le subscribe recupère la rps serveur
      next: () => {
        this.plantsToDisplay = this.plantsToDisplay.filter(//filtre les élements du tableau en conservant ceux dt l'id est different de plantId
          (x) => x.id !== plantId //verifie si l'itérateur est différent de plantId
        );
        console.log('plante supprimée');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
