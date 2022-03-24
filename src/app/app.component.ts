import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuariosele:any;
  usuariosele_apoyo:any;
  posicion_json:any;
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
    "nombre" : "Rodrigo",
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
    "nombre" : "Marta",
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
    "nombre" : "Pablo",
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
  rescatarposicion(index:any){
    this.posicion_json=index;
    this.usuariosele=this.datos[this.posicion_json];
    this.usuariosele_apoyo=Object.assign({},this.datos[this.posicion_json]);
  }
  crear(){
    this.datos.push({
    "nombre" : "empty",
    "apellidos" : "empty",
    "email": "empty",
    "telefono": "empty",
    "direccion": "empty",
    "codigo_postal": "empty",
    "poblacion": "empty",
    "provincia": "empty",
    "profesion": "empty",
    "notas": "empty"})
  }
  modificar(){
    this.datos[this.posicion_json]=Object.assign({},this.usuariosele_apoyo);
    this.usuariosele = this.datos[this.posicion_json]
  }
  borrar(){
    this.datos.splice(this.posicion_json,1);
  }
  valor_boton(tipo:any){
    switch (tipo){
      case "crear":
        this.crear();
        break;
      case "modificar":
        this.modificar();
        break;
      case "borrar":
        this.borrar();
        break;
      default:
        "¿?";
    }
  }
}
