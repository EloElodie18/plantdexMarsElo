import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-form-plant',
  templateUrl: './form-plant.component.html',
  styleUrls: ['./form-plant.component.css'],
})
export class FormPlantComponent implements OnInit {
  formPlant!: FormGroup; //importer formgroup d'angular, declaration de propriete
  @Output() submitFormPlant = new EventEmitter<Plant>(); //new eventEmmitter sur Plant, qui est le gabarit des données de plantes, des valeurs que les plantes contiennent
  @Input() plantRecupe!: Plant;
  
  ngOnInit(): void {
    this.initForm();    
  }

  initForm() {
    if (this.plantRecupe) {
      this.formPlant = new FormGroup({
        //structure ts de recuperation de données
        id: new FormControl(this.plantRecupe.id, Validators.required),
        nom: new FormControl(this.plantRecupe.nom, Validators.required), //valeur initiale + un validateur pr imposer le fait de completer qqch
        image: new FormControl(this.plantRecupe.image),
        categorie: new FormControl(this.plantRecupe.categorie),
        arrosage: new FormControl(this.plantRecupe.arrosage),
        soleil: new FormControl(this.plantRecupe.soleil),
      });
    } else {
      this.formPlant = new FormGroup({
        nom: new FormControl('', Validators.required),
        image: new FormControl(''),
        categorie: new FormControl(''),
        arrosage: new FormControl(''),
        soleil: new FormControl(''),
      });
    }
    // console.log(this.formPlant);
    // console.log('ça marche?', this.plantRecupe);
  }

  onSubmitForm() {
    // console.log(this.formPlant.value); //représente la saisie noté ds le formulaire
    this.submitFormPlant.emit(this.formPlant.value); //j'attribue la valeur de mon Output à la valeur de formPlant, qui représente les valeurs saisie, //ce this.submitFormPlant .... permet de transmettre les saisies a l4output, au parent
    console.log('PLANTE MODIF CONSOLE', this.formPlant.value);
  }
}
