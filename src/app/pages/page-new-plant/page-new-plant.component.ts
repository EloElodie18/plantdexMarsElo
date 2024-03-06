import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-new-plant',
  templateUrl: './page-new-plant.component.html',
  styleUrls: ['./page-new-plant.component.css']
})
export class PageNewPlantComponent {

  constructor (private plantsService : PlantsService, private router: Router) {}; //initialiser les propriétés de l'objet, injection dependance

  newPlantSubmitted(plant:Plant){
    this.plantsService.createNewPlant(plant).subscribe((resp) => {
      //le plant = données saisies, le subscribe qui transdorme ce plant en resp
      console.log('new plant created', resp);
      this.router.navigate(['/admin']); //ici ajoter le necessaire car la plante est crée dc on peut restourner vers admin, possible grace class angular, navigate: retour page admin
    })
  }

}
