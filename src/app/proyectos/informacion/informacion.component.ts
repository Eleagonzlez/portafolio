import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  parametro: string = '';

  proyecto: any = {};

  constructor(private activateRouter:ActivatedRoute,
              private proyectosServices: ProyectosService,
              private route:Router){
    
    this.activateRouter.params.subscribe( (id:any) =>{
      this.parametro = decodeURI(id.nombre);
      
    });
   
    
  }

  ngOnInit(){
    
    this.proyecto = this.proyectosServices.getProyecto(this.parametro);
    
  }

  goProyectos(){
    this.route.navigate(['/proyectos']);
  }

}
