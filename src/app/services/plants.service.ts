import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants');
  }

  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }

  deletePlant(plantId: number) {
    //renvoie le fait que c'est delete c'est pas lui qui delete, ça delete l'affichage seulement?
    return this.http.delete(`http://localhost:3000/plants/${plantId}`); //delete permet de renvoyer l'observable, délivre l'info à l'interface web pour sa maj
  }

  getDetails(plantId: number): Observable<Plant> { //récupère les détails d'une plante en renvoyant une requête http à l'url contenant son id
    return this.http.get<Plant>(`http://localhost:3000/plants/${plantId}`);
  }

  putEdit(plantId: number, plant: Plant): Observable<Plant> {// envoie une requete avec l'id et la modif et attend une rps du serveur avec la plante MAJ
    return this.http.put<Plant>(`http://localhost:3000/plants/${plantId}`, plant);
  }
}


