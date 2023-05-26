import { Component } from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  constructor(private proyectosService: ProyectosService){}

  get data(){
    return this.proyectosService.data;
  }

  getURI(nombre: string) {
    return encodeURI(nombre);
  }

}
