import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent implements OnInit {
 @Input() usuariobotones:any;

 crear(){
  
 }
 modificar(){
    this.usuariobotones.nombre=prompt("Introduzca nombre");
    this.usuariobotones.apellidos=prompt("Introduzca nombre");
    this.usuariobotones.notas=prompt("Introduzca nombre");
    this.usuariobotones.telefono=prompt("Introduzca nombre");
    this.usuariobotones.direccion=prompt("Introduzca nombre");
    this.usuariobotones.codigo_postal=prompt("Introduzca nombre");
    this.usuariobotones.poblacion=prompt("Introduzca nombre");
    this.usuariobotones.provincia=prompt("Introduzca nombre");
    this.usuariobotones.profesion=prompt("Introduzca nombre");
    this.usuariobotones.email=prompt("Introduzca nombre");
 }
 borrar(){
 }
  constructor() { }

  ngOnInit(): void {
  }

}
