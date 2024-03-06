import { Component, Input } from '@angular/core';
import { Plant } from '../../models/plant';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  //ARROSAGE// Méthode pour récupérer les icônes d'arrosage
  recupIconArrosage(): string[] {
    let icons: string[] = [];
    for (let i = 0; i < 3; i++) {
      if (i < this.plant.arrosage) {
        icons.push('droplet-fill');
      } else {
        icons.push('droplet');
      }
    }
    return icons;
  }

  //EXPOSITION//
  recupIconSoleilChiffre(): number {
    //methode exposition pr transformer mes string en chiffre
    if (this.plant.soleil === 'peu') {
      return 1;
    } else if (this.plant.soleil === 'moyen') {
      return 2;
    } else if (this.plant.soleil === 'beaucoup') {
      return 3;
    } else {
      return 0;
    }
  }

  recupIconSoleil(): string[] { //ajoute ou non tel ou tel icone en fonction de l'expo
    let iconsVide: string[] = [];
    let orange: number = this.recupIconSoleilChiffre();
    for (let i = 0; i < 3; i++) {
      if (i < orange) {
        iconsVide.push('sun-fill');
      } else {
        iconsVide.push('sun');
      }
    }
    return iconsVide;
  }

}
