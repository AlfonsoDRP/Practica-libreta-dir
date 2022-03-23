import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent{
  @Output() usuarios_salida : EventEmitter<any> = new EventEmitter;
  datos = [ {
    "nombre" : "Alfonso",
    "apellidos" : "De Rojas Perez",
    "email": "alfonsodrojasp@gmail.com",
    "telefono": "654588422",
    "direccion": "C/ tartessos S/N",
    "codigo_postal": "58745",
    "poblacion": "Albacete",
    "provincia": "Albacete",
    "profesion": "Estudiante",
    "notas": "10"
  },
  {
    "nombre" : "Alberto",
    "apellidos" : "gonzalez",
    "email": "albergon@gmail.com",
    "telefono": "653423522",
    "direccion": "C/ tartessos S/N",
    "codigo_postal": "23545",
    "poblacion": "Albacete",
    "provincia": "Al235te",
    "profesion": "Desarrollador",
    "notas": "10"
  },
  {
    "nombre" : "Alfonso",
    "apellidos" : "De Rojas Perez",
    "email": "alfonsodrojasp@gmail.com",
    "telefono": "654588422",
    "direccion": "C/ tassos S/N",
    "codigo_postal": "5845",
    "poblacion": "Albacete",
    "provincia": "Albacete",
    "profesion": "Estudiante",
    "notas": "10"
  },
  {
    "nombre" : "Alfonso",
    "apellidos" : "De Rojas Perez",
    "email": "alfonsodrgmail.com",
    "telefono": "654588422",
    "direccion": "C/ tartessos S/N",
    "codigo_postal": "58745",
    "poblacion": "Albacete",
    "provincia": "Albacete",
    "profesion": "Este",
    "notas": "10"
  },
  {
    "nombre" : "Alfonso",
    "apellidos" : "De Rojas Perez",
    "email": "alfonsodrojasp@gmail.com",
    "telefono": "654588422",
    "direccion": "C/ tartessos S/N",
    "codigo_postal": "58745",
    "poblacion": "Albacete",
    "provincia": "Ate",
    "profesion": "Estudiante",
    "notas": "10"
  },
];
usuarioseleccionado:any
seleccionausuario(index:number){
  this.usuarios_salida.emit(this.datos[index]);
}

  constructor() {}

  ngOnInit(): void {this.usuarios_salida.emit(this.datos[0])}
}
