import { Injectable } from '@angular/core';
import { proyectos } from '../shared/data/Proyectos.data';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private _data = proyectos;
  
  constructor() { }


  get data(){
    return this._data;
  }

  getProyecto(nombre: string){
        
    return this._data.filter((proyecto)=> proyecto.nombre === nombre ); 
  }



}
