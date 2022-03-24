import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-libreta-dir';
  usuariosele:any;
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
  seleccionausuario(usuario:any){
    this.usuariosele=usuario;
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
    console.log("modificacion en progreso");
  }
  borrar(){
    this.datos.splice(this.datos.indexOf(this.usuariosele),1);
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
